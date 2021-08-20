
import React from 'react'
import * as styles from './footer.module.css';


const Footer = () => (

    <footer>
        <div className={styles.container}>
            <div className={styles.footerColumn}>
                <ul>
                    <li className={styles.listHead}>Company</li>
                    <li>1</li>
                </ul>
            </div>
            <div className={styles.footerColumn}>
                <ul>
                    <li className={styles.listHead}>Products</li>
                    <li>2</li>
                </ul>
            </div>
            <div className={styles.footerColumn}>
                
                <ul>
                    <li className={styles.listHead}>Help</li>
                    <li>3</li>
                </ul>
            </div> 

        </div>
    </footer>

)


export default Footer
