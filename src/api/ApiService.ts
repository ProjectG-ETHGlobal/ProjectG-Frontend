const ENDPOINT = import.meta.env.VITE_BACKEND_API;

export const APIService = {
	getNonce: async (address: string) => {
		try {
			const nonce = await fetch(`${ENDPOINT}/nonce`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ walletAddress: address }),
			}).then((res) => res.json());

			return nonce;
		} catch (e) {
			console.log("EERRROORR::", e);
		}
	},
	login: async (address: string, signature: string) => {
		const response = await fetch(`${ENDPOINT}/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ walletAddress: address, signature }),
		}).then((res) => res.json());
		if (response.error) {
			throw new Error(response.error);
		}
		return response;
	},
	fetchProducts: async (accessToken: string) => {
		const response = await fetch(`${ENDPOINT}/products`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				authorization: `Bearer ${accessToken}`,
			},
		});
		const data = await response.json();
		return [
			{ type: "Featured", products: data.slice(0, 5) },
			{ type: "Top Charts", products: data.slice(5) },
		];
	},
};
