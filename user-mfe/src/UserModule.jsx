import { useEffect } from "react";
import { useUsers } from "./hooks/useUsers";
import { useSearch } from "./hooks/useSearch";
import { usePagination } from "./hooks/usePagination";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import Pagination from "./components/Pagination";
import "./UserModule.css";

//modulo principal de gestión de usuarios
const UserModule = ({ onUserSelected, onStatsUpdate, initialConfig = {} }) => {
	//obtener usuarios de la API
	const { users, loading, error, refetch } = useUsers();

	//busqueda
	const { searchTerm, setSearchTerm, filteredUser } = useSearch(users);

	//paginación
	const {
		currentItems: usuariosPagina,
		currentPage: paginaActual,
		totalPages: totalPaginas,
		hasNextPage: tieneSiguiente,
		hasPrevPage: tieneAnterior,
		goToPage: irAPagina,
		nextPage: siguientePagina,
		prevPage: anteriorPagina,
		resetPage,
	} = usePagination(filteredUser, initialConfig.itemsPerPage || 5);

	//enviar stats al host cuando cambien
	useEffect(() => {
		if (onStatsUpdate) {
			onStatsUpdate({
				totalUsers: users.length,
				filteredUser: filteredUser.length,
				currentPage: paginaActual,
				totalPages: totalPaginas,
				searchTerm,
				loading,
			});
		}
	}, [
		users.length,
		filteredUser.length,
		paginaActual,
		totalPaginas,
		searchTerm,
		loading,
		onStatsUpdate,
	]);

	//resetear página cuando cambia la búsqueda
	useEffect(() => {
		resetPage();
	}, [searchTerm]);

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleUserClick = (user) => {
		if (onUserSelected) {
			onUserSelected(user);
		}
	};

	if (loading) {
		return <LoadingSpinner />;
	}

	if (error) {
		return (
			<ErrorMessage
				message={error}
				onRetry={refetch}
			/>
		);
	}

	return (
		<div className="user-module">
			<div className="module-header">
				<h2>Gestión de Usuarios Domina</h2>
				<span className="badge">Micro Frontend</span>
			</div>

			<SearchBar
				value={searchTerm}
				onChange={handleSearchChange}
				placeholder="Buscar por nombre..."
			/>

			<div className="results-info">
				<p>
					{filteredUser.length} usuario{filteredUser.length !== 1 ? "s" : ""}{" "}
					encontrado{filteredUser.length !== 1 ? "s" : ""}
				</p>
				{searchTerm && (
					<p className="search-active">
						Buscando: <strong>{searchTerm}</strong>
					</p>
				)}
			</div>

			<UserList
				users={usuariosPagina}
				onUserClick={handleUserClick}
			/>

			{filteredUser.length > (initialConfig.itemsPerPage || 5) && (
				<Pagination
					currentPage={paginaActual}
					totalPages={totalPaginas}
					hasNextPage={tieneSiguiente}
					hasPrevPage={tieneAnterior}
					onPageChange={irAPagina}
					onNext={siguientePagina}
					onPrev={anteriorPagina}
				/>
			)}
		</div>
	);
};

export default UserModule;
