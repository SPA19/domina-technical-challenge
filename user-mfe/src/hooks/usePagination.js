import { useState, useMemo } from "react";

//es un custom hook para manejar la paginación de una lista de elementos
export const usePagination = (items, itemsPerPage = 5) => {
	const [currentPage, setCurrentPage] = useState(1);

	//calcular datos de paginación
	const paginationData = useMemo(() => {
		const totalPages = Math.ceil(items.length / itemsPerPage);
		const indexOfLastItem = currentPage * itemsPerPage;
		const indexOfFirstItem = indexOfLastItem - itemsPerPage;
		const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

		return {
			currentItems,
			totalPages,
			currentPage,
			hasNextPage: currentPage < totalPages,
			hasPrevPage: currentPage > 1,
			totalItems: items.length,
		};
	}, [items, currentPage, itemsPerPage]);

	//funciones de navegación
	const goToPage = (pageNumber) => {
		const page = Math.max(1, Math.min(pageNumber, paginationData.totalPages));
		setCurrentPage(page);
	};

	//funcion para ir a la siguiente pagina
	const nextPage = () => {
		if (paginationData.hasNextPage) {
			setCurrentPage((prev) => prev + 1);
		}
	};

	//funcion para ir a la pagina anterior
	const prevPage = () => {
		if (paginationData.hasPrevPage) {
			setCurrentPage((prev) => prev - 1);
		}
	};

	//funcion para resetear paginacion
	const resetPage = () => {
		setCurrentPage(1);
	};

	return {
		...paginationData,
		goToPage,
		nextPage,
		prevPage,
		resetPage,
	};
};
