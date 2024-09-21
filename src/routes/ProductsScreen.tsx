import { Header } from "@/components/Header";
import { ProductType } from "@/components/ProductType";
import { Button } from "@/components/ui/button";

import { Award, BarChart, Grid, Layers } from "lucide-react";
import { useState } from "react";

export interface IProduct {
	name: string;
	price: number;
	description: string;
}

export interface IProductType {
	type: string;
	products: IProduct[];
}

export default function ProductsScreen() {
	const userDetails = {
		profilePicture: "https://api.dicebear.com/9.x/pixel-art/svg",
	};
	const showSearch = true;
	const [productsWithType, setProductsWithType] = useState<IProductType[] | []>(
		[
			{
				type: "Featured",
				products: [
					{
						name: "dApp 1",
						price: 0.05,
						description: "Decentralized Application",
					},
					{
						name: "dApp 2",
						price: 0.05,
						description: "Decentralized Application",
					},
					{
						name: "dApp 3",
						price: 0.05,
						description: "Decentralized Application",
					},
					{
						name: "dApp 4",
						price: 0.05,
						description: "Decentralized Application",
					},
				],
			},
			{
				type: "Top Charts",
				products: [
					{ name: "Game 1", price: 0.05, description: "Decentralized Game" },
					{ name: "Game 2", price: 0.05, description: "Decentralized Game" },
					{ name: "Game 3", price: 0.05, description: "Decentralized Game" },
					{ name: "Game 4", price: 0.05, description: "Decentralized Game" },
					{ name: "Game 5", price: 0.05, description: "Decentralized Game" },
				],
			},
		]
	);

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
