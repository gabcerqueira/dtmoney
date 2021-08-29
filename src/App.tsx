import { createServer, Model } from "miragejs";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import ModalTransactions from "./components/ModalTransactions";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./TransactionsContext";

createServer({
	models: {
		transaction: Model,
	},

	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1,
					titulo: "Trabalho Faculdade",
					preço: 3000,
					categoria: "Venda",
					type: "deposit",
					data: "25/10/2021",
				},
				{
					id: 2,
					titulo: "Hot dog",
					preço: 25,
					categoria: "Alimentação",
					type: "withdraw",
					data: "29/10/2021",
				},
			],
		});
	},

	routes() {
		this.namespace = "api";
		this.get("/transactions", () => {
			return this.schema.all("transaction");
		});

		this.post("/transactions", async (schema, request) => {
			const data = await JSON.parse(request.requestBody);

			return schema.create("transaction", data);
		});
	},
});

const App = () => {
	const [isModalNewTransactionOpen, setIsModalNewTransactionOpen] =
		useState<boolean>(false);

	return (
		<TransactionsProvider>
			<Header onSetIsModalNewTransactionOpen={setIsModalNewTransactionOpen} />
			<Dashboard />
			<ModalTransactions
				isModalNewTransactionOpen={isModalNewTransactionOpen}
				setIsModalNewTransactionOpen={setIsModalNewTransactionOpen}
			/>
			<GlobalStyle />
		</TransactionsProvider>
	);
};

export default App;
