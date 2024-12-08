import styled from "styled-components";

const CardWrapper = styled.div`
	text-align: left;
	padding: 1%;
	background: lightGray;
	border-radius: 5px;
	margin-bottom: 2%;
	max-width: 18rem;
	min-height: 23rem;
`;

const Title = styled.h2`
	width: 100%;
	padding-bottom: 10px;
	text-align: center;
	color: black;
`;

const Count = styled.span`
	color: darkGray;
	margin-top: auto;
	border-top: 1px solid darkGray;
	padding-top: 0.5rem;
`;

function Card({ title, views, answers }) {
	return (
		<CardWrapper className="card text-bg-light m-4">
			<Title className="card-title">{title}</Title>
			<Count>{`Views: ${views} | Answers: ${answers}`}</Count>
		</CardWrapper>
	);
}

export default Card;
