import UserCard from "./UserCard";
import "./UserList.css";

const UserList = ({ users }) => {
	if (!users || users.length === 0) {
		return (
			<div className="no-results">
				<p>No se encontraron usuarios con ese nombre.</p>
			</div>
		);
	}

	return (
		<div className="user-list">
			{users.map((user) => (
				<UserCard
					key={user.id}
					user={user}
				/>
			))}
		</div>
	);
};

export default UserList;