import { useState } from "react";
import UserModule from "./UserModule";
import "./App.css";


// aplicacion standalone para desarrollo

function App() {
	const [stats, setStats] = useState({});
	const [selectedUser, setSelectedUser] = useState(null);

	const handleStatsUpdate = (newStats) => {
		setStats(newStats);
		console.log("📊 Stats actualizadas:", newStats);
	};

	const handleUserSelected = (user) => {
		setSelectedUser(user);
		console.log("👤 Usuario seleccionado:", user);
	};

	return (
		<div className="standalone-app">
			{/* header de testing */}
			<div className="standalone-header">
				<h1>Listado de usuarios - Modo prueba</h1>
				<p>Puerto 5001 - Desarrollo Independiente</p>
			</div>

			{/* panel de estadisticas */}
			<div className="standalone-stats-panel">
				<h3>📊 Estadísticas en Tiempo Real</h3>
				<div className="stats-grid">
					<div className="stat-box">
						<span className="stat-label">Total Usuarios</span>
						<span className="stat-value">{stats.totalUsers || 0}</span>
					</div>
					<div className="stat-box">
						<span className="stat-label">Filtrados</span>
						<span className="stat-value">{stats.filteredUsers || 0}</span>
					</div>
					<div className="stat-box">
						<span className="stat-label">Página Actual</span>
						<span className="stat-value">{stats.currentPage || 0}</span>
					</div>
					<div className="stat-box">
						<span className="stat-label">Total Páginas</span>
						<span className="stat-value">{stats.totalPages || 0}</span>
					</div>
				</div>

				{stats.searchTerm && (
					<div className="search-indicator">
						🔍 Búsqueda activa: "<strong>{stats.searchTerm}</strong>"
					</div>
				)}

				{stats.loading && (
					<div className="loading-indicator">⏳Cargando datos...</div>
				)}
			</div>

			{/* usuario seleccionado */}
			{selectedUser && (
				<div className="standalone-selected-user">
					<h3>👤 Usuario Seleccionado</h3>
					<div className="user-details">
						<p>
							<strong>Nombre:</strong> {selectedUser.name}
						</p>
						<p>
							<strong>Email:</strong> {selectedUser.email}
						</p>
						<p>
							<strong>Teléfono:</strong> {selectedUser.phone}
						</p>
						<p>
							<strong>Ciudad:</strong> {selectedUser.address?.city}
						</p>
					</div>
					<button
						className="clear-button"
						onClick={() => setSelectedUser(null)}
					>
						Limpiar Selección
					</button>
				</div>
			)}

			{/* micro Frontend */}
			<div className="standalone-mfe-container">
				<UserModule
					onStatsUpdate={handleStatsUpdate}
					onUserSelected={handleUserSelected}
					initialConfig={{ itemsPerPage: 5 }}
				/>
			</div>

			{/* footer */}
			<div className="standalone-footer">
				<p>
					Este es el modo de desarrollo standalone del Micro Frontend.
					<br />
					En producción, este módulo será consumido por el HostApp.
				</p>
			</div>
		</div>
	);
}

export default App;