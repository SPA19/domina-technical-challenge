import { Component } from "react";
import "./ErrorBoundary.css";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error) {
		console.error("Error cargando Micro Frontend:", error);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="error-container">
					<h3>⚠️ Error al cargar el Micro Frontend</h3>
					<p>No se pudo conectar con el módulo de usuarios.</p>
					<p className="help-text">
						Asegúrate de que el micro frontend esté corriendo en el puerto 5001
					</p>
					<button onClick={() => window.location.reload()}>Recargar</button>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;