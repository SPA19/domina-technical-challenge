import "./Pagination.css";

//cmponente de paginacion
const Pagination = ({
	currentPage,
	totalPages,
	hasNextPage,
	hasPrevPage,
	onPageChange,
	onNext,
	onPrev,
}) => {
	//generar numeros de página
	const pageNumbers = [];
	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}

	return (
		<div className="pagination">
			<button
				className="pagination-button"
				onClick={onPrev}
				disabled={!hasPrevPage}
			>
				← Anterior
			</button>

			<div className="page-numbers">
				{pageNumbers.map((number) => (
					<button
						key={number}
						className={`page-number ${currentPage === number ? "active" : ""}`}
						onClick={() => onPageChange(number)}
					>
						{number}
					</button>
				))}
			</div>

			<button
				className="pagination-button"
				onClick={onNext}
				disabled={!hasNextPage}
			>
				Siguiente →
			</button>
		</div>
	);
};

export default Pagination;