import styled from "styled-components";
import Button from "../Button/Button";

const NavBarWrapper = styled.div`
	// width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const NavBarContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.h2`
	text-align: center;
	flex-basis: 60%;
	&:first-child {
		margin-left: 20%;
	}
	&:last-child {
		margin-right: 20%;
	}
`;

const NavBarButton = styled(Button)`
	margin: 10px 5%;
`;

function NavBar({ goBack, title, openForm = false }) {
	return (
		<NavBarWrapper className="pt-2 pb-2 bg-light">
			<NavBarContent className="container">
			{goBack && (
				<NavBarButton
					onClick={goBack}
					className="btn btn-primary"
				>{`< Go Back`}</NavBarButton>
			)}
			<Title>{title}</Title>
			{openForm && (
				<NavBarButton
					onClick={openForm}
					className="btn btn-primary"
				>{`+ Add Item`}</NavBarButton>
			)}
			</NavBarContent>
		</NavBarWrapper>
	);
}

export default NavBar;
