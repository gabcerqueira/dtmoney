import styled from "styled-components";

export const DashboardContainer = styled.div`
	max-width: 1080px;
	margin: -2rem auto;
`;

export const SummaryContainer = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const Table = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
	padding: 0 0 4rem 0;
`;

export const TableTitle = styled.div`
	align-self: center;
	font-size: 2rem;
	margin: 2rem auto;
	text-align: left;
`;

export const TableHeader = styled.div`
	width: 100%;
	margin: 2rem auto;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 10rem;
	padding: 0 2rem;
	text-align: left;
`;
