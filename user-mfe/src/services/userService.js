const API_URL = "https://jsonplaceholder.typicode.com";

//obtiene todos los usuarios desde la API
export const userService = {
	async getAllUsers() {
		try {
			const response = await fetch(`${API_URL}/users`);

			if (!response.ok) {
				throw new Error(`Error HTTP: ${response.status}`);
			}

			const data = await response.json();
			return data;
		} catch (error) {
			console.error("Error fetching users:", error);
			throw error;
		}
	},
};
