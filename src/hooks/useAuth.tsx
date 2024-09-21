import React, { createContext } from "react";

const AuthContext = createContext({
	isAuthenticated: false,
	login: () => Promise.resolve(),
	logout: () => Promise.resolve(),
});

function useAuth() {
	const [isAuthenticated, setIsAuthenticated] = React.useState(false);

	return {
		isAuthenticated,
		login() {
			return new Promise<void>((res) => {
				setIsAuthenticated(true);
				res();
			});
		},
		logout() {
			return new Promise<void>((res) => {
				setIsAuthenticated(false);
				res();
			});
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
