import styled from "styled-components";

const HotelItemWrapper = styled.div`
	max-width: 540px;
`;

const Title = styled.h3`
	margin-left: 2%;
`;

const Thumbnail = styled.img`
	border-radius: 5px;
`;

function HotelItem({ data }) {
	return (
		<HotelItemWrapper className="card m-3">
			<div className="row g-0">
				<div className="col-md-4">
					<Thumbnail src={data.thumbnail} width={200} />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<Title className="card-title">{data.title}</Title>
					</div>
				</div>
			</div>
		</HotelItemWrapper>
	);
}

export default HotelItem;
