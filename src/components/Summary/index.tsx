import React from "react";
import { Container, ContentContainer, Total } from "./styles";
interface Iprops {
	title: string;
	icon: string;
	value: number;
}

const Summary = ({ title, icon, value }: Iprops) => {
	const Logo = icon;

	return (
		<Container title={title}>
			<ContentContainer>
				<span>{title}</span>
				<img src={Logo} alt="icon" />
			</ContentContainer>
			<Total>
				<strong>R${value}</strong>
			</Total>
		</Container>
	);
};

export default Summary;