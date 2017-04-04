import React, { Component } from 'react';

import Select from 'react-select'
import 'react-select/dist/react-select.css'

const getOptions = function (input, callback) {
    setTimeout(function () {
        callback(null, {
            options: [
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' },
                { value: 'three', label: 'Three' },
                { value: 'four', label: 'Four' },
                { value: 'five', label: 'Five' }
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
        if(this.props.multi) {
            this.setState({
                value: val
            })
        } else {
            this.setState({
                value: val.value
            })
        }
    }

    render() {
        return (
            this.props.isAsync ?
            <Select.Async
                name="form-field-name"
                loadOptions={getOptions}
                onChange={this.props.handleChange || this.logChange.bind(this)}
                value={this.props.value || this.state.value}
                placeholder={this.props.placeholder}
                backspaceRemoves={true}
                className={this.props.className}
                multi={this.props.multi}
                deleteRemoves={true}
                resetValue={[]}
            />
            : 
            <Select
                name="form-field-name"
                options={this.props.options}
                onChange={this.props.handleChange || this.logChange.bind(this)}
                value={this.props.value || this.state.value}
                placeholder={this.props.placeholder}
                backspaceRemoves={true}
                className={this.props.className}
                multi={this.props.multi}
                deleteRemoves={true}
                resetValue={[]}
            />
        );
    }
}

export default DropDown;