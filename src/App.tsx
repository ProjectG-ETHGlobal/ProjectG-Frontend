import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthenticationScreen from "./routes/AuthenticationScreen";
import { ProductsScreen } from "./routes/ProductsScreen";
import SupplierScreen from "./routes/SupplierScreen";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<AuthenticationScreen />} />
				<Route path="/user" element={<ProductsScreen />} />
				<Route path="/supplier" element={<SupplierScreen />} />
			</Routes>
		</Router>
	);
}
