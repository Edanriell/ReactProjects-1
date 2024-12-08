import Task from "../Task/Task";
import styled from "styled-components";

const LaneWrapper = styled.div`
	text-align: left;
	padding: 0;
	background: lightGray;
	border-radius: 20px;
	min-height: 50vh;
	width: 20vw;

	@media (max-width: 768px) {
		margin-bottom: 5%;
	}
`;

const Title = styled.h2`
	width: 100%;
	padding-bottom: 10px;
	text-align: center;
`;

function Lane({ classNames, laneId, title, loading, error, tasks, onDragStart, onDragOver, onDrop }) {
	return (
		<LaneWrapper className={classNames} onDragOver={onDragOver} onDrop={(e) => onDrop(e, laneId)}>
			<Title className="card-title pt-4 pb-4 mb-4">{title}</Title>
			{loading || error ? (
				<span>{error || "Loading..."}</span>
			) : (
				tasks.map((task) => (
					<Task
						key={task.id}
						id={task.id}
						title={task.title}
						body={task.body}
						onDragStart={onDragStart}
					/>
				))
			)}
		</LaneWrapper>
	);
}

export default Lane;
