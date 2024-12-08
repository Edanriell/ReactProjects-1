import styled from "styled-components";
import { usePrice } from "../utils/hooks";
import AddToCartButton from "./AddToCartButton";

const ProductItemWrapper = styled.div`
	display: flex;
	// text-align: left;
	// align-items: center;
	justify-content: space-between;
	padding: 1%;
	// background: lightGray;
	// border-radius: 5px;
	padding: 10px;
	margin-bottom: 2%;
	text-decoration: none;
	min-width: 640px;
`;

const Title = styled.h3`
	margin-left: 2%;
`;

const Price = styled.h3`
	margin-left: 2%;
	font-weight: bold;
	// color: green;
`;

const Thumbnail = styled.img`
	border-radius: 5px;
	object-fit: cover;
	max-height: 150.63px;
`;

function ProductItem({ data, addToCart = false }) {
	const price = usePrice(data.price);

	return (
		<ProductItemWrapper className="card text-bg-dark mb-3">
			<div class="row g-0">
				<div class="col-md-4">
					{data.thumbnail && (
						<Thumbnail
							src={data.thumbnail}
							width={200}
							className="img-fluid rounded-start"
						/>
					)}
				</div>
				<div class="col-md-8">
					<div class="card-body">
						<Title>{data.title}</Title>
						<Price>{price}</Price>
						{addToCart && <AddToCartButton productId={data.id} />}
						<div />
					</div>
				</div>
			</div>
		</ProductItemWrapper>
	);
}

export default ProductItem;
