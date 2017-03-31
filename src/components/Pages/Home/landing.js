import React, { Component } from 'react';

import Perf from 'react-addons-perf'; // Measurement performance

import TentButton from '../../../components/controls/Buttons/tent-button';

// Responsive block
import ResponsiveBlock from '../../../components/Example/ResponsiveBlock';

// Responsive block
import DropDown from '../../../components/Example/DropDown';

// View
import View from '../../../components/View';
import Text from '../../../components/View/text';

// Calendar
import FullCalendar from '../../../components/controls/FullCalendar';

// Modal
import SkyLight from 'react-skylight';

const today = new Date();
const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

// style ResponsiveBlock
const blockStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    color: '#888888',
    height: '20vh',
    borderRadius: '4px'
}

class Landing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list: [
                { "text": "hello" },
                { "text": "hello" },
                { "text": "hello" }
            ],
            dateSelected: new Date()
        }
    }

    onChangeDate(date) {

        Perf.start()
        console.log(date)
    }

    resetMultiplier() {
        Perf.start()
        this.setState({
            list: [
                { "text": "world" },
                { "text": "world" },
                { "text": "world" }
            ]
        })
    }

    shouldComponentUpdate(nextProps, nextState) { // fixed wasted render
        return nextState.list !== this.state.list
    }

    componentDidUpdate() {
        Perf.stop()
        Perf.printInclusive()
        Perf.printWasted()
        Perf.getLastMeasurements()
    }

    componentWillMount() {
        // window.performance.mark('App')
    }

    componentDidMount() {
        // console.log(window.performance.now('App'))
    }

    _executeBeforeModalOpen() {
        console.log('Executed before open');
    }

    _executeAfterModalOpen() {
        console.log('Executed after open');
    }

    _executeBeforeModalClose() {
        console.log('Executed before close');
    }

    _executeAfterModalClose() {
        console.log('Executed after close');
    }

    _executeOnOverlayClicked() {
        console.log('Overlay clicked!');
    }

    render() {
        return (
            <div className='container'>
                <SkyLight
                    hideOnOverlayClicked
                    afterClose={this._executeAfterModalClose}
                    afterOpen={this._executeAfterModalOpen}
                    beforeClose={this._executeBeforeModalClose}
                    beforeOpen={this._executeBeforeModalOpen}
                    onOverlayClicked={this._executeOnOverlayClicked}
                    ref="dialogWithCallBacks"
                    title="Hello!, I'm a modal with callbacks!">
                    I have callbacks!
                </SkyLight>
                <h1 style={{ display: 'block' }}>Button Components</h1>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TentButton
                        handleClick={() => this.refs.dialogWithCallBacks.show()}
                        text='Open Modal'
                        buttonClass='clear'
                    />
                    <TentButton
                        handleClick={() => { console.log('clicked') }}
                        text='outlined'
                        buttonClass='outlined'
                    />
                    <TentButton
                        handleClick={() => { console.log('clicked') }}
                        text='filled'
                        buttonClass='filled'
                    />
                    <TentButton
                        handleClick={() => { console.log('clicked') }}
                        text='filled primary'
                        buttonClass='filled'
                        theme='primary'
                    />
                    <TentButton
                        handleClick={this.resetMultiplier.bind(this)}
                        text='filled danger'
                        buttonClass='filled'
                        theme='danger'
                    />
                </div>
                <hr />
                <h1 style={{ display: 'block' }}>Calendar Components</h1>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <FullCalendar
                        width={400}
                        height={400}
                        selected={today}
                        disabledDays={[0, 6]}
                        minDate={lastWeek}
                        handleOnSelect={this.onChangeDate.bind(this)}
                    />
                    <FullCalendar
                        width={600}
                        height={400}
                        selected={today}
                        disabledDays={[0, 6]}
                        minDate={lastWeek}
                        layout='landscape'
                    />
                </div>
                <hr />
                <h1 style={{ display: 'block' }}>React - Select</h1>
                <div style={{ display: 'block', textAlign: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View styles={{ width: 33.33 + '%', margin: 1 + 'rem' }} node={<DropDown placeholder="Example select ..." className={'select--flex'} />} />
                        <View styles={{ width: 33.33 + '%', margin: 1 + 'rem' }} node={<DropDown placeholder="Example select ..." className={'select--flex'} />} />
                        <View styles={{ width: 33.33 + '%', margin: 1 + 'rem' }} node={<DropDown placeholder="Example select ..." className={'select--flex'} />} />
                    </div>
                    <View styles={{ margin: 1 + 'rem' }} node={<DropDown multi={true} placeholder="Example multi select ..." className={'select--flex'} />} />
                </div>
                <hr />
                <h1 style={{ display: 'block' }}>Responsive Block</h1>
                <div style={{ display: 'block', textAlign: 'center' }}>
                    <ResponsiveBlock styles={blockStyle} />
                </div>
                <hr />
                {
                    this.state.list.map((v, index) => {
                        return <Text label={v.text} key={index} />
                    })
                }
            </div>
        );
    }
}

export default Landing;