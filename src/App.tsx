import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AuthenticationScreen from "./routes/AuthenticationScreen";
import DeliveryPartnerScreen from "./routes/DeliveryPartnerScreen";
import ProductsScreen from "./routes/ProductsScreen";
import SupplierScreen from "./routes/SupplierScreen";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<AuthenticationScreen />} />
				<Route path="/user" element={<ProductsScreen />} />
				<Route path="/supplier" element={<SupplierScreen />} />
				<Route path="/deliveryPartner" element={<DeliveryPartnerScreen />} />
			</Routes>
		</Router>
	);
}
