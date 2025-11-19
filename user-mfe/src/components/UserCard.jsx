import { useState } from 'react'
import "./UserCard.css";

//componente que muestra la informacion de un usuario en una tarjeta
const UserCard = ({ user }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  }

  return (
		<div className="user-card">
			<div className="user-header">
				<h3 className="user-name">{user.name}</h3>
				<span className="user-id">ID: {user.id}</span>
			</div>

			<div className="user-basic-info">
				<p>
					<strong>Email:</strong> {user.email}
				</p>
				<p>
					<strong>Teléfono:</strong> {user.phone}
				</p>
				<p>
					<strong>Usuario:</strong> @{user.username}
				</p>
			</div>

			<button
				className="expand-button"
				onClick={toggleExpanded}
			>
				{expanded ? "▲ Ver menos" : "▼ Ver más"}
			</button>

			{expanded && (
				<div className="user-expanded-info">
					<div className="info-section">
						<h4 className="section-title">Dirección</h4>
						<p>
							{user.address.street}, {user.address.suite}
						</p>
						<p>
							{user.address.city}, {user.address.zipcode}
						</p>
					</div>

					<div className="info-section">
						<h4 className="section-title">Empresa</h4>
						<p>
							<strong>{user.company.name}</strong>
						</p>
						<p className="catch-phrase">"{user.company.catchPhrase}"</p>
						<p className="bs">{user.company.bs}</p>
					</div>

					<div className="info-section">
						<h4 className="section-title">Sitio Web</h4>
						<a
							href={`http://${user.website}`}
							target="_blank"
							rel="noopener noreferrer"
							className="website-link"
						>
							{user.website}
						</a>
					</div>
				</div>
			)}
		</div>
	);
}

export default UserCard