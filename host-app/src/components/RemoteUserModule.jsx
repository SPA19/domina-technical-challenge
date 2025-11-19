import { lazy, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";

//aqui hago la importación dinamica del micro frontend
const UserModule = lazy(() => import("userMFE/UserModule"));

//componente wrapper que carga el MicroFrontend de forma dinamica
const RemoteUserModule = ({ onUserSelected, onStatsUpdate, config }) => {
	return (
		<ErrorBoundary>
			<Suspense
				fallback={
					<div className="remote-loading">
						<div className="remote-spinner"></div>
						<p>Cargando módulo de usuarios...</p>
						<small>Conectando con Micro Frontend en puerto 5001</small>
					</div>
				}
			>
				<UserModule
					onUserSelected={onUserSelected}
					onStatsUpdate={onStatsUpdate}
					initialConfig={config}
				/>
			</Suspense>
		</ErrorBoundary>
	);
};

export default RemoteUserModule;
