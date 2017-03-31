import React, { PropTypes } from 'react'

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

Button.propTypes = {
    handleClick: PropTypes.func,
    theme: PropTypes.string,
    isCleared: PropTypes.bool,
    buttonStyle: PropTypes.object,
    labelStyle: PropTypes.object,
    text: PropTypes.string
}

export default Button