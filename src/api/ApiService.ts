const ENDPOINT = import.meta.env.BACKEND_API;

export const APIService = {
    getNonce: async (address: string) => {
        const nonce = await fetch(`${ENDPOINT}/nonce`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "walletaddress": address,
            },
        }).then((res) => res.json());
        if (nonce.error) {
            throw new Error(nonce.error);
        }
        return nonce;
    },
    login: async (address: string, signature: string) => {
        const response = await fetch(`${ENDPOINT}/verify`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "walletaddress": address,
                "signature": signature,
            },
        }).then((res) => res.json());
        if (response.error) {
            throw new Error(response.error);
        }
        return response;
    },
    
}