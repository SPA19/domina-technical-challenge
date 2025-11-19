import { useState, useCallback } from "react";
import RemoteUserModule from "./components/RemoteUserModule";
import "./App.css";

function App() {
	const [stats, setStats] = useState({});
	const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
	const [config] = useState({
		itemsPerPage: 5,
	});

	//actualizar estadisticas desde el microfrontend
	const handleStatsUpdate = useCallback((newStats) => {
		setStats(newStats);
		console.log("Stats:", newStats);
	}, []);

	//cuando se selecciona un usuario en el MFE
	const handleUserSelect = useCallback((user) => {
		setUsuarioSeleccionado(user);
		console.log("Usuario:", user);
	}, []);

	const limpiarSeleccion = () => {
		setUsuarioSeleccionado(null);
	};

	return (
		<div className="app">
			{/*header */}
			<header className="header">
				<h1>✉️ Aplicación Usuarios Drenvio</h1>
				<p>Prueba Técnica Drenvio</p>
			</header>

			{/*panel de estadisticas */}
			<div className="container">
				<div className="stats-panel">
					<h2>Panel de Control</h2>

					<div className="stats-grid">
						<div className="stat-card">
							<span className="stat-label">Total Usuarios</span>
							<span className="stat-value">{stats.totalUsers || 0}</span>
						</div>

						<div className="stat-card">
							<span className="stat-label">Filtrados</span>
							<span className="stat-value">{stats.filteredUsers || 0}</span>
						</div>

						<div className="stat-card">
							<span className="stat-label">Página</span>
							<span className="stat-value">
								{stats.currentPage || 0} / {stats.totalPages || 0}
							</span>
						</div>

						<div className="stat-card">
							<span className="stat-label">Estado</span>
							<span className="stat-value">
								{stats.loading ? "Cargando..." : "Listo"}
							</span>
						</div>
					</div>

					{/*info de busqueda */}
					{stats.searchTerm && (
						<div className="search-info">
							Buscando: <strong>{stats.searchTerm}</strong>
						</div>
					)}

					{/*usuario seleccionado */}
					{usuarioSeleccionado && (
						<div className="selected-user">
							<div>
								<h3>Usuario Seleccionado</h3>
								<p>
									<strong>{usuarioSeleccionado.name}</strong>
								</p>
								<p>{usuarioSeleccionado.email}</p>
								<p>{usuarioSeleccionado.phone}</p>
							</div>
							<button onClick={limpiarSeleccion}>✕</button>
						</div>
					)}
				</div>

				{/*micro Frontend */}
				<div className="mfe-section">
					<div className="mfe-header">
						<h2>Módulo de Usuarios</h2>
						<span className="status">Conectado - Puerto 5001</span>
					</div>

					<div className="mfe-container">
						<RemoteUserModule
							onUserSelected={handleUserSelect}
							onStatsUpdate={handleStatsUpdate}
							config={config}
						/>
					</div>
				</div>
			</div>

			{/*footer*/}
			<footer className="footer">
				<p>
					© 2025 Arquitectura de Micro Frontends con Vite + React  • Desarrollado
					por Simón Posada Acosta
				</p>
			</footer>
		</div>
	);
}

export default App;