import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { IProduct } from "@/routes/ProductsScreen";
import { CircleMinus, CirclePlus } from "lucide-react";
import { Button } from "../ui/button";

export const Product = (product: IProduct, index: number) => {
	return (
		<Card key={index}>
			<CardHeader>
				<CardTitle>{product.name}</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col justify-center items-center">
				{/* {!product.imageUrl && <div className="mb-2 h-32 rounded-md bg-muted" />} */}
				<img
					className={`mb-2 h-32 rounded-md bg-muted flex justify-center items-center text-xs text-slate-400 ${
						product.imageUrl ? "" : "w-full"
					}`}
					alt={product.name}
					src={product.imageUrl}
				/>
				<p className="text-sm text-muted-foreground">{product.description}</p>
			</CardContent>
			<CardFooter className="flex items-center justify-between">
				<span className="text-sm font-medium">{product.price}</span>
				<Button variant={"outline"}>
					<CirclePlus size={16} />
				</Button>
				<Button variant={"outline"}>
					<CircleMinus size={16} />
				</Button>
			</CardFooter>
		</Card>
	);
};
