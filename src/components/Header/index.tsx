import Logoimg from "../../assets/Logo.svg";
import { Container, Content } from "./styles";

interface Iprops {
	onSetIsModalNewTransactionOpen: (bool: boolean) => void;
}

const Header = ({ onSetIsModalNewTransactionOpen }: Iprops) => {
	return (
		<Container>
			<Content>
				<img src={Logoimg} alt="gabs Money" />
				<button
					type="button"
					onClick={() => onSetIsModalNewTransactionOpen(true)}
				>
					Nova Transação
				</button>
			</Content>
		</Container>
	);
};

export default Header;
