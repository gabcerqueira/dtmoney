import { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import { RadioBox, Container, TransactionTypeContainer } from "./styles";
import close from "../../assets/fechar.svg";
import entrada from "../../assets/Entradas.svg";
import saida from "../../assets/Saídas.svg";
import { Api } from "../../services/api";
import { dataItem, TransactionsContext } from "../../TransactionsContext";
interface Iprops {
	isModalNewTransactionOpen: boolean;
	setIsModalNewTransactionOpen: (bool: boolean) => void;
}

const ModalTransactions = ({
	isModalNewTransactionOpen,
	setIsModalNewTransactionOpen,
}: Iprops) => {
	const [transactionType, setTransactionType] = useState("deposit");
	const [title, setTitle] = useState("");
	const [value, setValue] = useState(0);
	const [category, setCategory] = useState("");
	const { createTransaction } = useContext(TransactionsContext);
	const handleCreateNewTransaction = async (event: FormEvent) => {
		event.preventDefault();
		await createTransaction({
			titulo: title,
			preço: value,
			categoria: category,
			type: transactionType as dataItem["type"],
		});
		return setIsModalNewTransactionOpen(false);
	};

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
			<Container onSubmit={handleCreateNewTransaction}>
				<input
					type="text"
					placeholder="Titulo"
					onChange={(e) => setTitle(e.target.value)}
				/>
				<input
					type="number"
					placeholder="Valor"
					onChange={(e) => setValue(Number(e.target.value))}
				/>
				<TransactionTypeContainer>
					<RadioBox
						transactionType={transactionType === "deposit"}
						typeButton="deposit"
						type="button"
						onClick={() => {
							setTransactionType("deposit");
						}}
					>
						<span>Entrada</span> <img src={entrada} alt="ent" />
					</RadioBox>
					<RadioBox
						transactionType={transactionType === "withdraw"}
						typeButton="withdraw"
						type="button"
						onClick={() => {
							setTransactionType("withdraw");
						}}
					>
						<span>Saída</span> <img src={saida} alt="saida" />
					</RadioBox>
				</TransactionTypeContainer>
				<input
					type="text"
					placeholder="Categoria"
					onChange={(e) => setCategory(e.target.value)}
				/>
				<button type="submit">Salvar</button>
			</Container>
		</Modal>
	);
};

export default ModalTransactions;
