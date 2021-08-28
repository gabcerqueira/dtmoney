import React from "react";
import Logoimg from "../../assets/Logo.svg";
import { Container, Content } from "./styles";
const Header = () => (
	<Container>
		<Content>
			<img src={Logoimg} alt="gabs Money" />
			<button type="button">Nova Transação</button>
		</Content>
	</Container>
);

export default Header;
