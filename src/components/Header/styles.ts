import styled from "styled-components";

export const Container = styled.header`
	background: var(--blue);
`;

export const Content = styled.div`
	max-width: 1080px;
	padding: 2rem 1rem 5rem;
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	button {
		font-size: 1rem;
		color: #fff;
		background: var(--blue-light);
		border: 0;
		padding: 0 2rem;
		border-radius: 0.25rem;
		height: 2.5rem;
		transition: filter 0.2s;
		&:hover {
			filter: brightness(0.9);
		}
	}
	img {
		cursor: pointer;

		transition: filter 0.2s;

		&:hover {
			opacity: 0.9;
		}
	}
`;
