import styled from "styled-components";

export const Container = styled.form`
	width: 80%;
	margin: 1rem auto;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;

	input {
		background: #e7e9ee;
		width: 100%;
		height: 3.5rem;
		margin: 1rem auto;
		font-weight: 400;
		border-radius: 0.25rem;
		border: 0;

		&::placeholder {
			color: var(--text-body);
			padding: 0 0.5rem;
		}
	}

	button[type="submit"] {
		height: 3.5rem;
		width: 100%;
		background: var(--green);
		color: #fff;
		border: 0;
		border-radius: 0.25rem;
		font-size: 1rem;
		transition: filter 0.2s;
		font-weight: 600;
		&:hover {
			filter: brightness(0.9);
		}
	}
`;

export const TransactionTypeContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

type propTypes = {
	clicked: boolean;
};

export const ButtonContainer = styled.button`
	width: 12rem;
	height: 4rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
	border: 3px solid
		${(props: propTypes) => (props.clicked ? "var(--green)" : "grey")};
`;
