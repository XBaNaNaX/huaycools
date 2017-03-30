import React, { Component } from 'react';

class Text extends Component {
    render() {
        const {...props} = this.props;
        return (
            <span style={props.styles}>
                {props.label}
            </span>
        );
    }
}

export default Text;