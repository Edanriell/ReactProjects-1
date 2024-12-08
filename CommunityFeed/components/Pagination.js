import styled from "styled-components";
import Link from "next/link";

const PaginationContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const PaginationLink = styled.a`
	padding: 2%;
	margin: 1%;
	background: ${(props) => (!props.disabled ? null : "lightGrey")};
	pointer-events: ${(props) => (!props.disabled ? "all" : "none")};
	cursor: ${(props) => (!props.disabled ? "pointer" : "not-allowed")};
	cursor: pointer;
	border-color: unset;
`;

function Pagination({ currentPage, hasMore }) {
	return (
		<PaginationContainer className="mt-4">
			<Link href={`?page=${parseInt(currentPage) - 1}`}>
				<PaginationLink disabled={currentPage <= 1} className="btn btn-primary btn-lg">
					Previous
				</PaginationLink>
			</Link>
			<Link href={`?page=${parseInt(currentPage) + 1}`}>
				<PaginationLink disabled={!hasMore} className="btn btn-primary btn-lg">
					Next
				</PaginationLink>
			</Link>
		</PaginationContainer>
	);
}

export default Pagination;
