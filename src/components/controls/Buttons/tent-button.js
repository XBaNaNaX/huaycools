import React from 'react'

import classnames from 'classnames'
import buttonStyle from './tent-button.scss'

const TentButton = ({ ...props }) => {
    const theme = props.theme ? 'button--' + props.theme: ''
    const buttonClass = classnames(
        'button button--' + props.buttonClass, buttonStyle[theme]
    )

    return (
    <button
        onClick={props.handleClick}
        className={buttonClass}
        ref={props.ref}
    >
        <span style={props.labelStyle}>{props.text}</span>
    </button>
    )
}

export default TentButton