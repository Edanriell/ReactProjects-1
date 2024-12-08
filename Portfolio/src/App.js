import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import NoneExistingPage from "./pages/NoneExistingPage";
import logo from './assets/logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header logo={logo} />
				<Routes>
					<Route path="/" element={<Profile userName="edanriell" />} />
					<Route path="/projects" element={<Projects userName="edanriell" />} />
					<Route path="/projects/:name" element={<ProjectDetail userName="edanriell" />}/>
					<Route path="*" element={<NoneExistingPage />}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

