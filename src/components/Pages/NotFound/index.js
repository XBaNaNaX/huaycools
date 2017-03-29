import React from 'react'
import style from './style.scss'

const NotFound = ({ 
    title 
}) => (
    <div className={style.wrapper}>
        <div className={style.text}>
           404 Not Found !
        </div>
    </div>
)

export default NotFound