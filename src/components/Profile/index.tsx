import { Button } from "@/components/ui/button";
import DefaultProfilePic from "@/assets/default_profile_picture.jpeg";

export const Profile = ({
	profilePicture = DefaultProfilePic,
}: {
	profilePicture?: string;
}) => {
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
