import styled from "styled-components";

export const Container = styled.div`
	width: 20rem;
	height: 10rem;
	background: ${(props) =>
		props.title === "Total" ? `var(--green)` : `var(--shape)`};
	padding: 1rem 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	border-radius: 1rem;
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
