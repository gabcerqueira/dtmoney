import styled from "styled-components";

type types = {
	ativo: boolean;
};

const getBackground = ({ ativo }: types) =>
	ativo ? "var(--green)" : "var(--red)";

export const Container = styled.div`
	width: 100%;

	height: 5rem;
	display: grid;
	padding: 0 2rem;
	margin: 0.5rem auto;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 10rem;
	background: var(--shape);
	text-align: left;
	border-radius: 1rem;

	span {
		align-self: center;
		color: var(--text-body);
		font-size: 1rem;
		text-align: left;
	}
	.preco {
		color: ${getBackground};
	}
`;
