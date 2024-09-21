/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext } from "react";

export const AuthContext = createContext({
	authenticatedUser: null,
	accessToken: null,
	login: (userDetails: any, accessToken: string | null) => {},
	logout: () => {},
});

function useAuth() {
	const [authenticatedUser, setAuthenticatedUser] = React.useState<any>(null);
	const [accessToken, setAccessToken] = React.useState<string | null>(null);

	return {
		authenticatedUser,
		accessToken,
		login(userDetails: any, accessToken: string | null) {
			console.log("userDetails", userDetails, "\naccessToken", accessToken);
			setAuthenticatedUser(userDetails);
			setAccessToken(accessToken);
		},
		logout() {
			setAuthenticatedUser(null);
			setAccessToken(null);
		},
	};
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const auth = useAuth();

	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export default function AuthConsumer() {
	return React.useContext(AuthContext);
}
