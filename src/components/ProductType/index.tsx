import { IProduct, IProductType } from "@/routes/ProductsScreen";
import { Product } from "../Product";

export const ProductType = ({ type, products }: IProductType) => {
	return (
		<div className="mt-8 first-of-type:mt-0">
			<h2 className="mb-4 text-2xl font-semibold">{type}</h2>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{products.map((product: IProduct, index: number) => (
					<Product key={index} {...product} />
				))}
			</div>
		</div>
	);
};
