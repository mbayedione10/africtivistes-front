import * as React from "react"

import data from '../../asset/data/social.yml'

const Social = () => {
  return (<>
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          <a href={item.path} target="_blank" rel="noreferrer">
            <i className={item.icon} aria-label={item.name} />
          </a>
        </li>
      ))}
    </ul>
  </>)
}

export default Social