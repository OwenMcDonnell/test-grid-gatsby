
import React from 'react'

import { logo, header, navList} from './header.module.css'

const Header = (props) => (

  <div className={header}>
    <nav>
      <div className={logo}> 
          &#10044;{props.siteTitle}&#10044;

        
      </div>
      <div className={navList}>
        <ul>
          <li>Products</li>
          <li>More Products</li>
          <li>Blog</li>
        </ul>
      </div>

    </nav>
  </div>

)


export default Header
