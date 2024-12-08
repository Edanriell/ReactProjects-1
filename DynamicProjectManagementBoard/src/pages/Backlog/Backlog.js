import Task from "../../components/Task/Task";
import useDataFetching from "../../hooks/useDataFetching";
import styled from "styled-components";

const BacklogWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 5%;
`;

const Title = styled.h2`
	width: 100%;
	padding-bottom: 10px;
	text-align: center;
	border-bottom: 1px solid darkGray;
`;

const TasksWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	flex-wrap: wrap;
	margin: 5%;
`;

function Backlog() {
	const [loading, error, tasks] = useDataFetching(
		"https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks",
	);

	return (
		<BacklogWrapper className="p-5 bg-light border rounded-4">
			<Title className="pb-5">Backlog</Title>
			<TasksWrapper>
				{loading || error ? (
					<span>{error || "Loading..."}</span>
				) : (
					tasks.map((task) => <Task key={task.id} title={task.title} body={task.body} />)
				)}
			</TasksWrapper>
		</BacklogWrapper>
	);
}
export default Backlog;
