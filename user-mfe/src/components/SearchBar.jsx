import "./SearchBar.css";

//componente de la barra de busqueda
const SearchBar = ({value, onChange, placeholder = "Buscar por nombre..."}) => {
	const handleClear = () => {
		onChange({ target: { value: "" } });
	};

	return (
		<div className="search-container">
			<input
				type="text"
				className="search-input"
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			{value && (
				<button
					className="clear-button"
					onClick={handleClear}
				>
					✕
				</button>
			)}
		</div>
	);
};

export default SearchBar;
