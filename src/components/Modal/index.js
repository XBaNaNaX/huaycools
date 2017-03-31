import React, { Component } from 'react';

import SkyLight from 'react-skylight';

class Modal extends Component {
    render() {
        const { ...props } = this.props;
        return (
            <SkyLight
                afterClose={props.afterClose}
                afterOpen={props.afterOpen}
                beforeClose={props.beforeClose}
                beforeOpen={props.beforeOpen}
                onOverlayClicked={props.onOverlayClicked}
                ref={props.ref}
                title={props.modalTitle}>
                {
                    props.node
                }
            </SkyLight>
        )
    }
}

Modal.displayName = 'ExampleCallBack';

export default Modal;