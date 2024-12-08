import { useState, useEffect } from "react";
import Link from "../components/Link";
import List from "../components/List";
import "./Profile.css";

function Profile({ userName }) {
	const [loading, setLoading] = useState(false);
	const [profile, setProfile] = useState({});

	const items = [
		{
			field: "html_url",
			value: <Link url={profile.html_url} title={profile.html_url} />,
		},
		{
			field: "repos_url",
			value: <Link url={profile.repos_url} title={profile.repos_url} />,
		},
		{ field: "name", value: profile.name ?? "Unknown" },
		{ field: "company", value: profile.company ?? "Unknown" },
		{ field: "location", value: profile.location ?? "Unknown" },
		{ field: "email", value: profile.email ?? "Unknown" },
		{ field: "bio", value: profile.bio ?? "Unknown" },
	];

	useEffect(() => {
		async function fetchData() {
			const profile = await fetch(`https://api.github.com/users/${userName}`);
			const result = await profile.json();

			if (result) {
				setProfile(result);
				setLoading(false);
			}
		}

		fetchData();
	}, [userName]);

	return (
		<div className="Profile-container mt-4">
			<h2 className="pb-2">About me</h2>
			{loading ? (
				<div class="spinner-grow" role="status">
					<span class="visually-hidden">Loading...</span>
				</div>
			) : (
				<div>
					<img className="Profile-avatar mb-4" src={profile.avatar_url} alt={profile.name} />
					<List items={items} />
				</div>
			)}
		</div>
	);
}

export default Profile;
