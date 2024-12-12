import React from 'react'
import ColLgMd from './col-lg-md'

const ContainerPEC = ({projects}) => {
    return (
        <div className="container custom-container px-0">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
                {projects && projects.map(project => (
                    <div className="col pb-30" key={project.id}>
                        <ColLgMd project={project} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContainerPEC
