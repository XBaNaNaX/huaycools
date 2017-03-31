import React, { PropTypes } from 'react'
import classnames from 'classnames'
import {Link} from 'react-router-dom'
import styles from './nav.scss'

const navStyle = classnames(
    styles.navs
)

const Navs = ({
    logo,
    title,
    menus
}) => (
        <div className={navStyle} id="header">
            <div className={styles.logo} id="nav">
                <img src={logo} className="logo" alt="logo" />
                <span className="nav-title">
                    {title}
                </span>
                <ul className={styles.menu}>
                    {
                        menus.map((menu, index)=>{
                            return (
                                <li key={index} className="list__item"><Link to={menu.link}>{menu.label}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )

Navs.propTypes = {
    title: PropTypes.string.isRequired,
    menus: PropTypes.array.isRequired
}

export default Navs