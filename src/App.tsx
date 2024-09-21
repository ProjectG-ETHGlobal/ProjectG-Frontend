import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Award, BarChart, Grid, Layers, Search, Zap } from "lucide-react";

export default function Component() {
	return (
		<div className="flex h-screen flex-col">
			<header className="flex items-center justify-between border-b p-4">
				<div className="flex items-center space-x-4">
					<Zap className="h-8 w-8 text-primary" />
					<h1 className="text-2xl font-bold">Web3 SoftwareChain</h1>
				</div>
				<div className="flex items-center space-x-4">
					<div className="relative">
						<Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input placeholder="Search dApps" className="w-64 pl-8" />
					</div>
					<Button variant="outline">Connect Wallet</Button>
				</div>
			</header>
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
					<h2 className="mb-4 text-2xl font-semibold">Featured dApps</h2>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{[...Array(8)].map((_, i) => (
							<Card key={i}>
								<CardHeader>
									<CardTitle>dApp {i + 1}</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="mb-2 h-32 rounded-md bg-muted" />
									<p className="text-sm text-muted-foreground">
										Decentralized Application
									</p>
								</CardContent>
								<CardFooter className="flex items-center justify-between">
									<span className="text-sm font-medium">0.05 ETH</span>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button variant="outline" size="sm">
												Install
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent>
											<DropdownMenuLabel>
												Installation Options
											</DropdownMenuLabel>
											<DropdownMenuSeparator />
											<DropdownMenuItem>Install to Local Node</DropdownMenuItem>
											<DropdownMenuItem>Deploy to Network</DropdownMenuItem>
											<DropdownMenuItem>View Source Code</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</CardFooter>
							</Card>
						))}
					</div>
				</main>
			</div>
			<footer className="border-t p-4 text-center text-sm text-muted-foreground">
				© 2023 Web3 SoftwareChain. All rights reserved.
			</footer>
		</div>
	);
}
