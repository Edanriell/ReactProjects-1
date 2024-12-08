import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProjectDetail({ userName }) {
	const [loading, setLoading] = useState(false);
	const [project, setProject] = useState([]);
	const { name } = useParams();

	useEffect(() => {
		async function fetchData() {
			const data = await fetch(`https://api.github.com/repos/${userName}/${name}`);
			const result = await data.json();

			if (result) {
				setProject(result);
				setLoading(false);
			}
		}

		if (userName && name) {
			fetchData();
		}
	}, [userName, name]);

	return (
		<div className="Project-container">
			<h2 className="mt-4">Project: {project.name}</h2>
			{loading ? (
				<div class="spinner-grow" role="status">
					<span class="visually-hidden">Loading...</span>
				</div>
			) : (
				<div></div>
			)}
		</div>
	);
}

export default ProjectDetail;
