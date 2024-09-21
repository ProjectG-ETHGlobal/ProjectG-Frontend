import { APIService } from "@/api/ApiService";
import { Header } from "@/components/Header";
import { ProductType } from "@/components/ProductType";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/hooks/useAuth";

import { Award, BarChart, Grid, Layers } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ENDPOINT = import.meta.env.VITE_BACKEND_API;
export interface IProduct {
	id: number;
	imageUrl?: string;
	name: string;
	price: number;
	description: string;
}

export interface IProductType {
	type: string;
	products: IProduct[];
}

export default function ProductsScreen() {
	const { authenticatedUser, accessToken } = useContext(AuthContext);
	const navigate = useNavigate();

	console.log("authenticatedUser", authenticatedUser);

	useEffect(() => {
		if (!authenticatedUser || !accessToken) {
			navigate("/");
		}
	}, [authenticatedUser, navigate, accessToken]);

	const userDetails = {
		profilePicture: "https://api.dicebear.com/9.x/pixel-art/svg",
	};
	const showSearch = true;
	const [productsWithType, setProductsWithType] = useState<IProductType[] | []>(
		// [
		// 	{
		// 		type: "Featured",
		// 		products: [
		// 			{
		// 				id: 1,
		// 				name: "dApp 1",
		// 				price: 0.05,
		// 				description: "Decentralized Application",
		// 			},
		// 			{
		// 				id: 2,
		// 				name: "dApp 2",
		// 				price: 0.05,
		// 				description: "Decentralized Application",
		// 			},
		// 			{
		// 				id: 3,
		// 				name: "dApp 3",
		// 				price: 0.05,
		// 				description: "Decentralized Application",
		// 			},
		// 			{
		// 				id: 4,
		// 				name: "dApp 4",
		// 				price: 0.05,
		// 				description: "Decentralized Application",
		// 			},
		// 		],
		// 	},
		// 	{
		// 		type: "Top Charts",
		// 		products: [
		// 			{
		// 				id: 1,
		// 				name: "Game 1",
		// 				price: 0.05,
		// 				description: "Decentralized Game",
		// 			},
		// 			{
		// 				id: 2,
		// 				name: "Game 2",
		// 				price: 0.05,
		// 				description: "Decentralized Game",
		// 			},
		// 			{
		// 				id: 3,
		// 				name: "Game 3",
		// 				price: 0.05,
		// 				description: "Decentralized Game",
		// 			},
		// 			{
		// 				id: 4,
		// 				name: "Game 4",
		// 				price: 0.05,
		// 				description: "Decentralized Game",
		// 			},
		// 			{
		// 				id: 5,
		// 				name: "Game 5",
		// 				price: 0.05,
		// 				description: "Decentralized Game",
		// 			},
		// 		],
		// 	},
		// ]
		[]
	);

	useEffect(() => {
		const fn = async () => {
			if (!accessToken) return;
			const pr = await APIService.fetchProducts(accessToken);
			console.log(pr);
			setProductsWithType(pr);
		};
		fn();
	}, [accessToken]);

	return (
		<div className="flex h-screen flex-col">
			<Header {...userDetails} showSearch={showSearch} />
			<div className="flex flex-1 overflow-hidden">
				<nav className="w-64 space-y-2 overflow-y-auto border-r p-4">
					<Button variant="ghost" className="w-full justify-start">
						<Grid className="mr-2 h-4 w-4" />
						Featured
					</Button>
					<Button variant="ghost" className="w-full justify-start">
						<Layers className="mr-2 h-4 w-4" />
						Categories
					</Button>
					<Button variant="ghost" className="w-full justify-start">
						<Award className="mr-2 h-4 w-4" />
						Top Charts
					</Button>
					<Button variant="ghost" className="w-full justify-start">
						<BarChart className="mr-2 h-4 w-4" />
						Analytics
					</Button>
				</nav>
				<main className="flex-1 overflow-y-auto p-6">
					{productsWithType.map((productWithType: IProductType) => (
						<ProductType {...productWithType} />
					))}
				</main>
			</div>
			<footer className="border-t p-4 text-center text-sm text-muted-foreground">
				© 2023 Web3 SoftwareChain. All rights reserved.
			</footer>
		</div>
	);
}
