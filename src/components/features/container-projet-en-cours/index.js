import React from 'react'
import ColLgMd from './col-lg-md'

const ContainerPEC = ({projects}) => {
    return (
        <div className="card-deck">

            {projects && projects.map(project => {
                        return(
                            <ColLgMd project = {project} key={project.id} />
                            )
                    })}
        </div>
        
    )
}

export default ContainerPEC
