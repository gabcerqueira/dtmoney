import React from "react";
import { dataItem } from "../Dashboard";
import { Container } from "./styles";

interface Iprops {
	item: dataItem;
}

const TableItem = ({ item }: Iprops) => (
	<Container ativo={item.ativo}>
		<span>{item.titulo}</span>
		<span className="preco">R${item.preço}</span>
		<span>{item.categoria}</span>
		<span>{item.data}</span>
	</Container>
);

export default TableItem;
