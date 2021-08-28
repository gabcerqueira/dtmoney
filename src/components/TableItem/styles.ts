import styled from "styled-components";

export const Container = styled.div`
	width: 100%;

	height: 5rem;
	display: grid;
	padding: 0 2rem;
	margin: 0.5rem auto;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 10rem;
	background: var(--shape);

	span {
		align-self: center;
		color: var(--text-body);
		font-size: 1rem;
	}
`;
