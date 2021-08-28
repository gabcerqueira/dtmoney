import React, { useState } from "react";
import Logoimg from "../../assets/Logo.svg";
import { Container, Content } from "./styles";
import Modal from "react-modal";

const Header = () => {
	const [isModalNewTransactionOpen, setIsModalNewTransactionOpen] =
		useState(false);

	const ModalTransaction = () => (
		<Modal
			isOpen={isModalNewTransactionOpen}
			onRequestClose={() => setIsModalNewTransactionOpen(false)}
		></Modal>
	);

	return (
		<Container>
			<Content>
				<img src={Logoimg} alt="gabs Money" />
				<button
					type="button"
					onClick={() => setIsModalNewTransactionOpen(true)}
				>
					Nova Transação
				</button>
			</Content>
			<ModalTransaction />
		</Container>
	);
};

export default Header;
