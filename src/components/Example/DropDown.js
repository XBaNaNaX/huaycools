import React, { Component } from 'react';

import Select from 'react-select'
import 'react-select/dist/react-select.css'

const getOptions = function (input, callback) {
    setTimeout(function () {
        callback(null, {
            options: [
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' }
            ],
            // CAREFUL! Only set this to true when there are no more options,
            // or more specific queries will not be sent to the server.
            complete: true
        });
    }, 500);
};

class DropDown extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }

    logChange(val) {
        console.log(val);
        this.setState({
            value: val.value
        })
    }

    render() {
        return (
            <Select.Async
                name="form-field-name"
                loadOptions={getOptions}
                onChange={this.logChange.bind(this)}
                value={this.state.value}
                placeholder='Example select..'
                backspaceRemoves={true}
            />
        );
    }
}

export default DropDown;