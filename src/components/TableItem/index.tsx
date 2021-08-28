import React from "react";
import { dataItem } from "../../TransactionsContext";
import { Container } from "./styles";

interface Iprops {
	item: dataItem;
}

const TableItem = ({ item }: Iprops) => (
	<Container type={item.type}>
		<span>{item.titulo}</span>
		<span className="preco">
			{" "}
			{item.type !== "deposit" ? `-` : null} R${item.preço}
		</span>
		<span>{item.categoria}</span>
		<span>{item.data}</span>
	</Container>
);

export default TableItem;
