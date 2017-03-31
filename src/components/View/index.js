import React, { Component, PropTypes } from 'react'

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

View.propTypes = {
    styles: PropTypes.object,
    node: PropTypes.element.isRequired
}

export default View