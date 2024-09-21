import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Search, Zap } from "lucide-react";
import { Profile } from "../Profile";
import { Input } from "../ui/input";

export const Header = (userDetails: {
	profilePicture?: string;
	showSearch: boolean;
}) => {
	return (
		<header className="flex items-center justify-between border-b p-4">
			<div className="flex items-center space-x-4">
				<Zap className="h-8 w-8 text-primary" />
				<h1 className="text-2xl font-bold">Project G</h1>
			</div>
			<div className="flex items-center space-x-4">
				{userDetails.showSearch && (
					<div className="relative">
						<Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input placeholder="Search Products" className="w-64 pl-8" />
					</div>
				)}
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Profile {...userDetails} />
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Profile</DropdownMenuItem>
						<DropdownMenuItem>Billing</DropdownMenuItem>
						<DropdownMenuItem>Team</DropdownMenuItem>
						<DropdownMenuItem>Subscription</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	);
};
