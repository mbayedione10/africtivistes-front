import React from 'react'

const Pagination = ({ numPages, currentPage}) => {
    return (
        <div class="col-lg-12">
        <nav aria-label="Page navigation example">
            <ul class="pagination mt-50">
                {Array.from({ length: 6 }, (_, i) => {
                    return (
                        <li className="page-item">
                            <a className={i+1 === currentPage ?'active': ''} href={`/fr/actualites/${i + 1}`}>{i + 1}</a>
                        </li>
                        // <li class="page-item"><a class="active" href="#">01</a></li>
                    )
                })}
                <li class="page-item"><a href="#"><i class="fa fa-angle-right"></i></a></li>
            </ul>
        </nav> 
    </div>
    )
}

export default Pagination
