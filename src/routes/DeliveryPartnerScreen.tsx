import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

type Order = {
	id: string;
	dateOfDelivery: string;
	status: "delivered" | "pending" | "failed";
	message?: string;
};

const initialOrders: Order[] = [
	{ id: "ORD001", dateOfDelivery: "2023-06-15", status: "pending" },
	{ id: "ORD002", dateOfDelivery: "2023-06-16", status: "delivered" },
	{ id: "ORD003", dateOfDelivery: "2023-06-17", status: "failed" },
];

export default function DeliveryPartnerScreen() {
	const [orders, setOrders] = useState<Order[]>(initialOrders);
	const [message, setMessage] = useState("");
	const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

	const handleStatusChange = (orderId: string, newStatus: Order["status"]) => {
		setOrders(
			orders.map((order) =>
				order.id === orderId ? { ...order, status: newStatus } : order
			)
		);
	};

	const handleMessageSubmit = (orderId: string) => {
		setOrders(
			orders.map((order) =>
				order.id === orderId ? { ...order, message } : order
			)
		);
		setMessage("");
		setSelectedOrderId(null);
	};

	return (
		<div className="container mx-auto py-10">
			<h1 className="text-3xl font-bold mb-6">Delivery Partner Dashboard</h1>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Order ID</TableHead>
						<TableHead>Date of Delivery</TableHead>
						<TableHead>Delivery Status</TableHead>
						<TableHead>Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{orders.map((order) => (
						<TableRow key={order.id}>
							<TableCell>{order.id}</TableCell>
							<TableCell>{order.dateOfDelivery}</TableCell>
							<TableCell>{order.status}</TableCell>
							<TableCell>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button variant="outline">
											Update Status <ChevronDownIcon className="ml-2 h-4 w-4" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										<DropdownMenuItem
											onSelect={() => handleStatusChange(order.id, "delivered")}
										>
											Delivered
										</DropdownMenuItem>
										<DropdownMenuItem
											onSelect={() => handleStatusChange(order.id, "pending")}
										>
											Pending
										</DropdownMenuItem>
										<DropdownMenuItem
											onSelect={() => handleStatusChange(order.id, "failed")}
										>
											Failed
										</DropdownMenuItem>
										<DropdownMenuItem
											onSelect={() => setSelectedOrderId(order.id)}
										>
											Send a message
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>

			<Dialog
				open={selectedOrderId !== null}
				onOpenChange={() => setSelectedOrderId(null)}
			>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Send a Message</DialogTitle>
					</DialogHeader>
					<Textarea
						placeholder="Type your message here..."
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						maxLength={5000}
						className="min-h-[100px]"
					/>
					<div className="flex justify-end">
						<Button
							onClick={() =>
								selectedOrderId && handleMessageSubmit(selectedOrderId)
							}
						>
							Submit Message
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}
