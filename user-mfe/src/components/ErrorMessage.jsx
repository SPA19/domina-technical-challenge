import "./ErrorMessage.css";

const ErrorMessage = ({ message, onRetry }) => {
	return (
		<div className="error-container">
			<div className="error-content">
				<h2 className="error-title">⚠️ Error</h2>
				<p className="error-message">
					{message || "Ha ocurrido un error inesperado"}
				</p>
				{onRetry && (
					<button
						className="retry-button"
						onClick={onRetry}
					>
						Intentar de nuevo
					</button>
				)}
			</div>
		</div>
	);
};

export default ErrorMessage;
