import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Beers from "./pages/Beers/Beers";
import Home from "./pages/Home/Home";
import SingleBeer from "./pages/SingleBeer/SingleBeer";

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route
					path="/React-Typescript-Beer-App/beers"
					element={<Beers />}
				/>
				<Route
					path="/React-Typescript-Beer-App/beer/:id"
					element={<SingleBeer />}
				/>
				<Route path="/React-Typescript-Beer-App" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
