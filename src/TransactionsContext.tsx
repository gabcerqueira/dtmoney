import { createContext, ReactNode, useEffect, useState } from "react";
import { Api } from "./services/api";

export type dataItem = {
	id: number;
	titulo: string;
	preço: number;
	categoria: string;
	data: string;
	type: "deposit" | "withdraw";
};

type transactionInput = Omit<dataItem, "id" | "data">;

interface Iprops {
	children: ReactNode;
}

interface TransactionsContextData {
	data: dataItem[];
	createTransaction: (transactionInput: transactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
	{} as TransactionsContextData
);

export const TransactionsProvider = ({ children }: Iprops) => {
	const [data, setData] = useState<dataItem[]>([]);

	useEffect(() => {
		(async () => {
			const res = await Api.get("/transactions");

			console.log("resposta : ", res);
			setData(res.data.transactions);
		})();
	}, []);

	const createTransaction = async (transactionInput: transactionInput) => {
		const obj: dataItem = {
			id: 80,
			titulo: transactionInput.titulo,
			preço: transactionInput.preço,
			categoria: transactionInput.categoria,
			data: Date.now().toString(),
			type: transactionInput.type,
		};

		const response = await Api.post("/transactions", obj);
		const { transaction } = response.data;

		setData([...data, transaction]);
	};

	return (
		<TransactionsContext.Provider value={{ data, createTransaction }}>
			{children}
		</TransactionsContext.Provider>
	);
};
