import { Link as RouterLink } from "react-router-dom";
import "./Header.css";

function Header({ logo }) {
	return (
		<header className="App-header">
			<img src={logo} className="App-logo mt-4" alt="logo" />
			<h1 className="App-h1 mt-2 mb-2">My Portfolio</h1>
			<nav className="App-nav mb-4 navbar-nav d-flex flex-row">
				<RouterLink to="/" className="App-link nav-link">
					About me
				</RouterLink>
				<RouterLink to="/projects" className="App-link nav-link">
					Projects
				</RouterLink>
			</nav>
		</header>
	);
}

export default Header;
