import React from 'react'

import Header from './header'
import Footer from './footer'
import { pageBody, container } from './layout.module.css'

const Layout = ({ children }) => (

    
      <div className={container}>
        <Header siteTitle="Grid Malfunction Repro"/>
    
        <main >
          <div className={pageBody}>
            <div><p>content</p></div>
            <div><p>content</p></div>
            <div><p>content</p></div>
            <div><p>content</p></div>
            <div><p>content</p></div>
          </div>
        </main>

        <Footer/>
      </div>
    
)


export default Layout