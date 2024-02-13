import React from 'react'
import { Link } from 'gatsby'

const Pagination = ({ totalPages, currentPage, basePath }) => {
    const isFirst = currentPage === 1
    const isLast = currentPage === totalPages
    const prevPage = currentPage - 1
    const nextPage = currentPage + 1

    return (
        <nav>
            <ul className="pagination">
                {!isFirst && (
                    <li>
                        <Link className="main-btn mr-2" to={`${basePath}${prevPage === 1 ? '' : prevPage}`} rel="prev">
                            ←
                        </Link>
                    </li>
                )}
                <li className="disabled">
                    <span className="main-btn">Page {currentPage} / {totalPages}</span>
                </li>
                {!isLast && (
                    <li>
                        <Link className="main-btn ml-2" to={`${basePath}${nextPage}`} rel="next">
                            →
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Pagination
