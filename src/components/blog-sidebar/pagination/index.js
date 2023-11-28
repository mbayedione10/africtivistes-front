import React from 'react';

const Pagination = ({ currentPage, totalPages }) => {
    const itemsPerRow = 8; // Adjust the number of items per row
    const totalRows = Math.ceil(totalPages / itemsPerRow);

    return (
        <div>
            {Array.from({ length: totalRows }, (_, row) => {
                const startPage = row * itemsPerRow + 1;
                const endPage = Math.min(startPage + itemsPerRow - 1, totalPages);

                return (
                    <div className="row" key={row}>
                        <div className="col-lg-7">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination mt-50">
                                    {/* Link for the first page */}
                                    <li className={`page-item ${currentPage === startPage ? 'active' : ''}`}>
                                        <a href={`/fr/actualites/`}>
                                            {startPage}
                                        </a>
                                    </li>

                                    {/* Links for other pages */}
                                    {Array.from({ length: endPage - startPage }, (_, i) => (
                                        <li key={startPage + i + 1} className={`page-item ${startPage + i + 1 === currentPage ? 'active' : ''}`}>
                                            <a href={`/fr/actualites/${startPage + i + 1}`}>
                                                {startPage + i + 1}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Pagination;
