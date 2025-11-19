import { useState, useEffect } from "react";
import { userService } from "../services/userService";

//custom hook para manejar el fetch de usuarios
export const useUsers = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	//funcion para obtener a los usuarios
	const fetchUsers = async () => {
		try {
			setLoading(true);
			setError(null);
			const data = await userService.getAllUsers();
			setUsers(data);
		} catch (err) {
			setError(err.message || "Error al cargar los usuarios");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return { users, loading, error, refetch: fetchUsers };
};
