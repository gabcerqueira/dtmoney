import React, { useState } from "react";
import Modal from "react-modal";
import { ButtonContainer, Container, TransactionTypeContainer } from "./styles";
import close from "../../assets/fechar.svg";
import entrada from "../../assets/Entradas.svg";
import saida from "../../assets/Saídas.svg";
interface Iprops {
	isModalNewTransactionOpen: boolean;
	setIsModalNewTransactionOpen: (bool: boolean) => void;
}

const ModalTransactions = ({
	isModalNewTransactionOpen,
	setIsModalNewTransactionOpen,
}: Iprops) => {
	const [clickedEntrada, setClickedEntrada] = useState(false);
	const [clickedSaida, setClickedSaida] = useState(false);

	return (
		<Modal
			overlayClassName="modal-overlay"
			className="modal-content"
			isOpen={isModalNewTransactionOpen}
			onRequestClose={() => setIsModalNewTransactionOpen(false)}
		>
			<button
				type="button"
				className="modal-close"
				onClick={() => {
					setIsModalNewTransactionOpen(false);
				}}
			>
				<img src={close} alt="fechar" />
			</button>
			<h2>Cadastrar Transação</h2>
			<Container>
				<input type="text" placeholder="Titulo" />
				<input type="number" placeholder="Valor" />
				<TransactionTypeContainer>
					<ButtonContainer
						clicked={clickedEntrada}
						type="button"
						onClick={() => {
							setClickedEntrada((prev) => !prev);
							if (clickedSaida) {
								setClickedSaida((prev) => !prev);
							}
						}}
					>
						<span>Entrada</span> <img src={entrada} alt="ent" />
					</ButtonContainer>
					<ButtonContainer
						clicked={clickedSaida}
						type="button"
						onClick={() => {
							setClickedSaida((prev) => !prev);
							if (clickedEntrada) {
								setClickedEntrada((prev) => !prev);
							}
						}}
					>
						<span>Saída</span> <img src={saida} alt="saida" />
					</ButtonContainer>
				</TransactionTypeContainer>
				<input type="text" placeholder="Categoria" />
				<button type="submit">Salvar</button>
			</Container>
		</Modal>
	);
};

export default ModalTransactions;
