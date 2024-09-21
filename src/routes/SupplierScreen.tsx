import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

type Product = {
	id: string;
	name: string;
	quantity: number;
	price: number;
	status:
		| "confirmed"
		| "shipped"
		| "out for delivery"
		| "delivered"
		| "rejected";
};

const initialProducts: Product[] = [
	{
		id: "P001",
		name: "Widget A",
		quantity: 100,
		price: 9.99,
		status: "confirmed",
	},
	{
		id: "P002",
		name: "Gadget B",
		quantity: 50,
		price: 24.99,
		status: "shipped",
	},
	{
		id: "P003",
		name: "Tool C",
		quantity: 200,
		price: 14.99,
		status: "delivered",
	},
	{
		id: "P004",
		name: "Device D",
		quantity: 75,
		price: 49.99,
		status: "out for delivery",
	},
];

const deliveryPartners = ["DHL", "FedEx", "MAERSK"];

const DeliveryStatus = ({ status }: { status: Product["status"] }) => {
	const statuses = ["confirmed", "shipped", "out for delivery", "delivered"];
	const currentIndex = statuses.indexOf(status);

	return (
		<div className="flex flex-col items-start">
			<div className="flex items-center">
				{statuses.map((s, index) => (
					<div key={s} className="flex items-center">
						<div
							className={`w-4 h-4 rounded-full border-2 ${
								index <= currentIndex
									? status === "rejected"
										? "bg-red-500 border-red-500"
										: "bg-green-500 border-green-500"
									: "bg-white border-gray-300"
							}`}
						/>
						{index < statuses.length - 1 && (
							<div
								className={`w-12 h-0.5 ${
									index < currentIndex
										? status === "rejected"
											? "bg-red-500"
											: "bg-green-500"
										: "bg-gray-300"
								}`}
							/>
						)}
					</div>
				))}
			</div>
			<div className="flex items-center mt-1">
				{statuses.map((s) => (
					<div key={s} className="flex items-center">
						<span
							className="text-xs whitespace-nowrap"
							style={{ width: "64px", marginLeft: "-8px" }}
						>
							{s.charAt(0).toUpperCase() + s.slice(1)}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default function SupplierScreen() {
	const [products, setProducts] = useState<Product[]>(initialProducts);
	const [closedOrders, setClosedOrders] = useState<Product[]>([]);

	const handleAccept = (productId: string) => {
		setProducts(
			products.map((product) =>
				product.id === productId ? { ...product, status: "shipped" } : product
			)
		);
	};

	const handleReject = (productId: string) => {
		const rejectedProduct = products.find(
			(product) => product.id === productId
		);
		if (rejectedProduct) {
			setClosedOrders([
				...closedOrders,
				{ ...rejectedProduct, status: "rejected" },
			]);
			setProducts(products.filter((product) => product.id !== productId));
		}
	};

	const handleSelectPartner = (productId: string, partner: string) => {
		console.log(`Selected ${partner} for product ${productId}`);
		// Here you would typically update the product with the selected delivery partner
	};

	return (
		<>
			<Header showSearch={false} />
			<div className="container mx-auto py-10">
				<h1 className="text-3xl font-bold mb-6">Product Details</h1>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Product ID</TableHead>
							<TableHead>Product Name</TableHead>
							<TableHead>Quantity</TableHead>
							<TableHead>Price</TableHead>
							<TableHead>Order Status</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{products.map((product) => (
							<TableRow key={product.id}>
								<TableCell>{product.id}</TableCell>
								<TableCell>{product.name}</TableCell>
								<TableCell>{product.quantity}</TableCell>
								<TableCell>${product.price.toFixed(2)}</TableCell>
								<TableCell>{product.status}</TableCell>
								<TableCell>
									<div className="flex space-x-2">
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Button variant="outline">Delivery Status</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent>
												<DropdownMenuItem>
													<DeliveryStatus status={product.status} />
												</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
										{product.status === "confirmed" ||
										product.status === "shipped" ? (
											<DropdownMenu>
												<DropdownMenuTrigger asChild>
													<Button variant="outline">
														Select Partner{" "}
														<ChevronDownIcon className="ml-2 h-4 w-4" />
													</Button>
												</DropdownMenuTrigger>
												<DropdownMenuContent>
													{deliveryPartners.map((partner) => (
														<DropdownMenuItem
															key={partner}
															onSelect={() =>
																handleSelectPartner(product.id, partner)
															}
														>
															{partner}
														</DropdownMenuItem>
													))}
												</DropdownMenuContent>
											</DropdownMenu>
										) : (
											<>
												<Button
													onClick={() => handleAccept(product.id)}
													variant="outline"
													size="sm"
												>
													Accept
												</Button>
												<Button
													onClick={() => handleReject(product.id)}
													variant="outline"
													size="sm"
												>
													Reject
												</Button>
											</>
										)}
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>

				{closedOrders.length > 0 && (
					<>
						<Separator className="my-8" />
						<h2 className="text-2xl font-bold mb-4">CLOSED ORDERS</h2>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Product ID</TableHead>
									<TableHead>Product Name</TableHead>
									<TableHead>Quantity</TableHead>
									<TableHead>Price</TableHead>
									<TableHead>Order Status</TableHead>
									<TableHead>Actions</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{closedOrders.map((product) => (
									<TableRow key={product.id}>
										<TableCell>{product.id}</TableCell>
										<TableCell>{product.name}</TableCell>
										<TableCell>{product.quantity}</TableCell>
										<TableCell>${product.price.toFixed(2)}</TableCell>
										<TableCell>{product.status}</TableCell>
										<TableCell>
											<DropdownMenu>
												<DropdownMenuTrigger asChild>
													<Button variant="outline">Delivery Status</Button>
												</DropdownMenuTrigger>
												<DropdownMenuContent>
													<DropdownMenuItem>
														<DeliveryStatus status={product.status} />
													</DropdownMenuItem>
												</DropdownMenuContent>
											</DropdownMenu>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</>
				)}
			</div>
		</>
	);
}
