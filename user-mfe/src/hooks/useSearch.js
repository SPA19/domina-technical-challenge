import { useState, useEffect } from "react";

export const useSearch = (users) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredUser, setFilteredUser] = useState(users);

	//filtrar usuarios cuando cambia el termino de busqueda
	useEffect(() => {
		if (!searchTerm.trim()) {
			setFilteredUser(users);
			return;
		}

		const filtered = users.filter((user) =>
			user.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredUser(filtered);
	}, [searchTerm, users]);

	return {
		searchTerm,
		setSearchTerm,
		filteredUser,
	};
};