import React, { Component } from 'react';
import sizeMe from 'react-sizeme';

class ResponsiveBlock extends Component {
    render() {
        const { width, height } = this.props.size;
        return (
           <div style={this.props.styles}>My size is {width || -1}px x {height || -1}px</div>
        );
    }
}

// Create the config
const config = { monitorHeight: true };

// Call SizeMe with the config to get back the HOC.
const sizeMeHOC = sizeMe(config);

export default sizeMeHOC(ResponsiveBlock);