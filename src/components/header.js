
import React from 'react'

import { logo, header} from './header.module.css'

const Header = ({ siteTitle }) => (

  <div className={header}>
    <nav>
      <div className={logo}> 
          <p>&#10044;{siteTitle}&#10044;</p>

        
      </div>
      <ul>
        <li>Products</li>
        <li>More Products</li>
        <li>Blog</li>
      </ul>

    </nav>
  </div>

)


export default Header
