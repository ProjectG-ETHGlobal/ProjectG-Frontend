import { Button } from "@/components/ui/button";

export const Profile = ({ profilePicture }: { profilePicture: string }) => {
	return (
		<>
			{profilePicture ? (
				<img
					alt="Profile"
					className="rounded-full h-12 w-12"
					src={profilePicture}
				/>
			) : (
				<Button>Connect to Wallet</Button>
			)}
		</>
	);
};
