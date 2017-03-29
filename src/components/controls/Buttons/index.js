import React from 'react'

import classnames from 'classnames'

import styles from './styles.scss'

const Button = ({ ...props }) => {
    
const btnStyle = classnames(
    styles.button, styles[props.theme], 'button', props.isCleared ? 'button--clear': ''
)
    return (<button
        onClick={props.handleClick}
        className={btnStyle}
        ref={props.ref}
        style={props.buttonStyle}
    >
        <span style={props.labelStyle}>{props.text}</span>
    </button>
    )
}

export default Button