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
import { UseTransactions } from "../../hooks/useTransaction";

type operation = "deposit" | "withdraw";

const Dashboard = () => {
	const { data } = UseTransactions();
	console.log("dado : ", data);

	const TotalValue = data.reduce(
		(acc, current) =>
			current.type === "deposit" ? acc + current.preço : acc - current.preço,
		0
	);

	const handleIoValue = (type: operation) =>
		data
			.filter((item) => item.type === type)
			.reduce((acc, current) => acc + current.preço, 0);

	return (
		<DashboardContainer>
			<SummaryContainer>
				<Summary
					title={"Entradas"}
					icon={Entrada}
					value={handleIoValue("deposit")}
				/>
				<Summary
					title={"Saídas"}
					icon={Saida}
					value={handleIoValue("withdraw")}
				/>
				<Summary title={"Total"} icon={Total} value={TotalValue} />
			</SummaryContainer>

			<TableTitle>Ultimas Transações</TableTitle>
			<TableHeader>
				{data.length > 0
					? Object.keys(data[0])
							.filter((key) => key !== "type" && key !== "id")
							.map((key, index) => <span key={index}>{key.toUpperCase()}</span>)
					: null}
			</TableHeader>
			<Table>
				{data.length > 0
					? data.map((item, index) => <TableItem key={index} item={item} />)
					: null}
			</Table>
		</DashboardContainer>
	);
};

export default Dashboard;
