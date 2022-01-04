import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Datacomp from "./components/Datacomp";
import { Grid } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Additem from "./components/Additem";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Datacomp />} />
				<Route path="/additem" element={<Additem />} />
			</Routes>
		</div>
	);
}

export default App;
