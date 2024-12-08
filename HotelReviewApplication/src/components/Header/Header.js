import styled from "styled-components";

const HeaderWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;

const Title = styled.h1`
	pointer-events: none;
`;

function Header() {
	return (
		<HeaderWrapper className="pt-5 pb-5 bg-primary bg-gradient">
			<Title>Hotel Reviews</Title>
		</HeaderWrapper>
	);
}

export default Header;
