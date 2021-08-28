import styled from "styled-components";

interface propTypes {
	titulo: string;
}

export const Container = styled.div<propTypes>`
	width: 20rem;
	height: 10rem;
	background: ${({ titulo }) =>
		titulo === "Total" ? `var(--green)` : `var(--shape)`};
	padding: 1rem 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	border-radius: 1rem;

	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Total = styled.span`
	font-size: 2rem;
	font-weight: normal;
	line-height: 3rem;
`;
