import React, { Component, PropTypes } from 'react'

class Text extends Component {
    render() {
        const {...props} = this.props;
        return (
            <span style={props.styles}>
                {
                    props.label
                }
            </span>
        )
    }
}

Text.propTypes = {
    styles: PropTypes.object,
    label: PropTypes.string.isRequired
}

export default Text