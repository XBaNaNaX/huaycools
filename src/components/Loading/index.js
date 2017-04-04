import React, { Component } from 'react';
import classnames from 'classnames'

import loadingStyle from './style.scss'
class Loading extends Component {
    render() {
        const { ...props } = this.props;
        const loadingClass = classnames(
            loadingStyle.loading, 
            loadingStyle.text,
            loadingStyle[props.position]
        )
        return (
            props.show ?
            <div className={loadingClass}>
                {
                    props.text ? <span>{props.text}</span> : null
                }
            </div>
            : null
        );
    }
}

export default Loading;