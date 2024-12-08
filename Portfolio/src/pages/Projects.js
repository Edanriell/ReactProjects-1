import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import List from "../components/List";

function Projects({ userName }) {
	const [loading, setLoading] = useState(true);
	const [projects, setProjects] = useState({});

	useEffect(() => {
		async function fetchData() {
			const data = await fetch(`https://api.github.com/users/${userName}/repos`);
			const result = await data.json();

			if (result) {
				setProjects(result);
				setLoading(false);
			}
		}

		fetchData();
	}, [userName]);

	return (
		<div className="Projects-container mt-4">
			<h2 className="mb-4">Projects</h2>
			{loading ? (
				<div class="spinner-grow" role="status">
					<span class="visually-hidden">Loading...</span>
				</div>
			) : (
				<div className="mb-5">
					<List
						items={projects.map((project) => ({
							field: project.name,
							value: (
								<RouterLink to={`/projects/${project.name}`}>
									Open project
								</RouterLink>
							),
						}))}
					/>
				</div>
			)}
		</div>
	);
}

export default Projects;
