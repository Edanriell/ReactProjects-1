import styled from "styled-components";
import { useRouter } from "next/router";
import CartButton from "./CartButton";
import Button from "./Button";

const SubHeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	background: #57339b;
	padding: 5px 10px;
`;

const SubHeaderContent = styled.div`
	display: flex;
	justify-content: space-between;
	background: #57339b;;
	padding: 5px 10px;
`;

const Title = styled.h2`
	text-align: center;
	flex-basis: 60%;
	color: white;
	&:first-child {
		margin-left: 20%;
	}
	&:last-child {
		margin-right: 20%;
	}
`;

function SubHeader({ title, goToCart = false }) {
	const router = useRouter();

	return (
		<SubHeaderWrapper className="pt-3 pb-3 mb-5">
			<SubHeaderContent className="container">
				<Button onClick={() => router.back()} className="btn btn-light" >{`< Go Back`}</Button>
				<Title>{title}</Title>
				{goToCart && <CartButton onClick={() => router.push("/cart")} className="btn btn-light" />}
			</SubHeaderContent>
		</SubHeaderWrapper>
	);
}

export default SubHeader;
