import React, { useEffect, useState } from "react";
import Summary from "../Summary";
import {
	DashboardContainer,
	SummaryContainer,
	Table,
	TableHeader,
	TableTitle,
} from "./styles";
import Entrada from "../../assets/Entradas.svg";
import Saida from "../../assets/Saídas.svg";
import Total from "../../assets/Total.svg";
import TableItem from "../TableItem";
import { Api } from "../../services/api";

export type dataItem = {
	titulo: string;
	preço: number;
	categoria: "Venda" | "Alimentação" | "Casa";
	data: string;
	ativo: boolean;
};

const Dashboard = () => {
	const datat: dataItem[] = [
		{
			titulo: "Desenvolvimento de site",
			preço: 12000,
			categoria: "Venda",
			data: "12/09/2021",
			ativo: true,
		},
		{
			titulo: "Hamburguer",
			preço: 700,
			categoria: "Casa",
			data: "12/09/2021",
			ativo: false,
		},
		{
			titulo: "Aluguel de Apartamento",
			preço: 1700,
			categoria: "Casa",
			data: "14/09/2021",
			ativo: false,
		},
	];
	const [data, setData] = useState(datat);
	useEffect(() => {
		(async () => {
			const res = await Api.get("/transactions");

			console.log("resposta : ", res);
			setData(res.data);
		})();
	}, []);

	return (
		<DashboardContainer>
			<SummaryContainer>
				<Summary title={"Entradas"} icon={Entrada} value={1300} />
				<Summary title={"Saídas"} icon={Saida} value={1300} />
				<Summary title={"Total"} icon={Total} value={1300} />
			</SummaryContainer>

			<TableTitle>Ultimas Transações</TableTitle>
			<TableHeader>
				{Object.keys(data[0])
					.filter((key) => key !== "ativo")
					.map((key) => (
						<span>{key.toUpperCase()}</span>
					))}
			</TableHeader>
			<Table>
				{data.map((item) => (
					<TableItem item={item} />
				))}
			</Table>
		</DashboardContainer>
	);
};

export default Dashboard;
