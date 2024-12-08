import { useEffect, useContext } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

import HotelsContext from "../context/HotelsContext";
import ReviewsContext from "../context/ReviewsContext";
import HotelItem from "../components/HotelItem/HotelItem";
import ReviewItem from "../components/ReviewItem/ReviewItem";

const ReviewsItemWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 0 auto;
	max-width: 760px;
`;

const HotelWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

function HotelDetail() {
	let navigate = useNavigate();
	const { hotelId } = useParams();

	const { loading, error, hotel, fetchHotel } = useContext(HotelsContext);
	const { reviews, fetchReviews } = useContext(ReviewsContext);

	useEffect(() => {
		hotelId && !hotel.id && fetchHotel(hotelId);
	}, [fetchHotel, hotel.id, hotelId]);

	useEffect(() => {
		hotelId && !reviews.length && fetchReviews(hotelId);
	}, [fetchReviews, hotelId, reviews.length]);

	return (
		<>
			{navigate && (
				<NavBar
					goBack={() => navigate(-1)}
					openForm={() => navigate(`/hotel/${hotelId}/new`)}
					title={hotel && hotel.title}
				/>
			)}
			<HotelWrapper className="mb-5">{hotel && <HotelItem data={hotel} />}</HotelWrapper>
			<ReviewsItemWrapper>
				{loading || error ? (
					<span>
						{error || (
							<div class="spinner-border" role="status">
								<span class="visually-hidden">Loading...</span>
							</div>
						)}
					</span>
				) : (
					reviews.map((review) => <ReviewItem key={review.id} data={review} />)
				)}
			</ReviewsItemWrapper>
		</>
	);
}

export default HotelDetail;
