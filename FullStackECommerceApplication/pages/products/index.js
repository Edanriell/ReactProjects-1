import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import SubHeader from "../../components/SubHeader";
import ProductItem from "../../components/ProductItem";

const ProductItemsWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	flex-direction: column;
	margin: 0 auto;
`;

const GET_PRODUCTS = gql`
	query getProducts {
		products {
			id
			title
			price
			thumbnail
		}
	}
`;

function Products() {
	const { loading, data } = useQuery(GET_PRODUCTS);

	return (
		<>
			<SubHeader title="Available products" goToCart />

			{loading ? (
				<div class="spinner-border text-dark" role="status">
					<span class="visually-hidden">Loading...</span>
				</div>
			) : (
				<ProductItemsWrapper className="container">
					{data &&
						data.products &&
						data.products.map((product) => (
							<ProductItem key={product.id} data={product} addToCart />
						))}
				</ProductItemsWrapper>
			)}
		</>
	);
}

export default Products;
