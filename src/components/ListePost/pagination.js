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
                    <Link to={`${basePath}${prevPage === 1 ? '' : prevPage}`} rel="prev">
                        ← Previous Page
                    </Link>
                )}
                {Array.from({ length: totalPages }, (_, i) => (
                    <li key={`page-${i + 1}`} className={currentPage === i + 1 ? 'active' : ''}>
                        <Link to={`${basePath}${i === 0 ? '' : i + 1}`}>{i + 1}</Link>
                    </li>
                ))}
                {!isLast && (
                    <Link to={`${basePath}${nextPage}`} rel="next">
                        Next Page →
                    </Link>
                )}
            </ul>
        </nav>
    )
}

export default Pagination
