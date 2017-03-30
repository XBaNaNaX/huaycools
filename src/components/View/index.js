import React, { Component } from 'react'

class View extends Component {
    render() {
        const {...props} = this.props;
        return (
            <div style={props.styles}>
                {
                    props.node
                }
            </div>
        )
    }
}

export default View