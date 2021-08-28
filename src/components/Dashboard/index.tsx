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
import { dataItem, TransactionsContext } from "../../TransactionsContext";
import { useContext } from "react";
/*
interface Iprops {
	data: dataItem[];
}
*/
const Dashboard = () => {
	const data = useContext(TransactionsContext);
	console.log("dado : ", data);
	return (
		<DashboardContainer>
			<SummaryContainer>
				<Summary title={"Entradas"} icon={Entrada} value={1300} />
				<Summary title={"Saídas"} icon={Saida} value={1300} />
				<Summary title={"Total"} icon={Total} value={1300} />
			</SummaryContainer>

			<TableTitle>Ultimas Transações</TableTitle>
			<TableHeader>
				{data.data.length > 0
					? Object.keys(data.data[0])
							.filter((key) => key !== "type" && key !== "id")
							.map((key, index) => <span key={index}>{key.toUpperCase()}</span>)
					: null}
			</TableHeader>
			<Table>
				{data.data.length > 0
					? data.data.map((item, index) => (
							<TableItem key={index} item={item} />
					  ))
					: null}
			</Table>
		</DashboardContainer>
	);
};

export default Dashboard;
