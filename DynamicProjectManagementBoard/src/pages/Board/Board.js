import { useEffect, useState } from "react";
import useDataFetching from "../../hooks/useDataFetching";
import Lane from "../../components/Lane/Lane";
import styled from "styled-components";

const BoardWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	margin: 5%;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const lanes = [
	{ id: 1, title: "To Do", classNames: "card text-bg-secondary" },
	{ id: 2, title: "In Progress", classNames: "card text-bg-secondary" },
	{ id: 3, title: "Review", classNames: "card text-bg-secondary" },
	{ id: 4, title: "Done", classNames: "card text-bg-secondary" },
];

function onDragStart(e, id) {
	e.dataTransfer.setData("id", id);
}

function onDragOver(e) {
	e.preventDefault();
}

function Board() {
	const [loading, error, data] = useDataFetching(
		`https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks`,
	);

	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		setTasks(data);
	}, [data]);

	function onDrop(e, laneId) {
		const id = e.dataTransfer.getData("id");

		const updatedTasks = tasks.filter((task) => {
			if (task.id.toString() === id) {
				task.lane = laneId;
			}
			return task;
		});

		setTasks(updatedTasks);
	}

	return (
		<BoardWrapper>
			{lanes.map((lane) => (
				<Lane
					key={lane.id}
					laneId={lane.id}
					title={lane.title}
					classNames={lane.classNames}
					loading={loading}
					error={error}
					tasks={tasks.filter((task) => task.lane === lane.id)}
					onDragStart={onDragStart}
					onDragOver={onDragOver}
					onDrop={onDrop}
				/>
			))}
		</BoardWrapper>
	);
}

export default Board;
