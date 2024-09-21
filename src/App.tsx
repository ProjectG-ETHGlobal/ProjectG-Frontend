import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthenticationScreen from "./routes/AuthenticationScreen";
import { ProductsScreen } from "./routes/ProductsScreen";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<AuthenticationScreen />} />
				<Route path="/user" element={<ProductsScreen />} />
			</Routes>
		</Router>
	);
}
