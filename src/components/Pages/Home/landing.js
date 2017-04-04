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

import Loading from '../../../components/Loading'

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
            dateSelected: new Date(),
            arcenums: null,
            listArcenums: null,
            arcenumsSelected: null,
            arcenumsSelectedDetail: null,
            isLoading: false
        }

        this.showLoading = this.showLoading.bind(this);
        this.hideLoading = this.hideLoading.bind(this);
    }

    showLoading() {
        this.setState({ isLoading: true })
    }

    hideLoading() {
        this.setState({ isLoading: false })
    }

    setArcenum(data) {
        this.setState({
            arcenums: data,
            listArcenums: data.data.map((row, index) => {
                return ({
                    value: row.ARCENUMKY,
                    label: 'Ext ref: ' + row.EXTREFCODE + ', MSGCODE: ' + row.MSGCODE
                })
            })
        })
    }

    setArcenumDetail(data) {
        this.setState({
            arcenumsSelectedDetail: data.data.length !== 0 ? data.data[0] : []
        })
    }

    fetchFromDB2(url, method = 'GET', body = {}, callback) {
        let _this = this;
        let fetchData = {
            method: method,
            body: body,
            headers: new Headers()
        }
        _this.showLoading();
        fetch(url, fetchData)
            .then((res) => res.json())
            .then(function (data) {
                callback(data);
                _this.hideLoading();
            })
            .catch(function (error) {
                _this.hideLoading();
                console.log(error);
            })
    }

    selectARCEnum(obj) {
        this.setState({
            arcenumsSelected: obj.value
        })

        if (obj.length !== 0) {
            this.fetchFromDB2('http://169.254.199.197:3001/api/arcenums/' + obj.value, 'GET', {}, this.setArcenumDetail.bind(this))
        } else {
            
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
        return nextState !== this.state
    }

    componentDidUpdate() {
        Perf.stop()
        Perf.printInclusive()
        Perf.printWasted()
        Perf.getLastMeasurements()
    }

    componentWillMount() {
        // window.performance.mark('App')
        this.fetchFromDB2('http://169.254.199.197:3001/api/arcenums', 'GET', {}, this.setArcenum.bind(this))
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
                <Loading position='fix' text='Loading please wait...' show={this.state.isLoading} />
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
                        <View styles={{ width: 33.33 + '%', margin: 1 + 'rem' }} node={<DropDown isAsync={true} placeholder="Example select ..." className={'select--flex'} />} />
                        <View styles={{ width: 33.33 + '%', margin: 1 + 'rem' }} node={<DropDown isAsync={true} placeholder="Example select ..." className={'select--flex'} />} />
                        <View styles={{ width: 33.33 + '%', margin: 1 + 'rem' }} node={<DropDown isAsync={true} placeholder="Example select ..." className={'select--flex'} />} />
                    </div>
                    <View styles={{ margin: 1 + 'rem' }} node={<DropDown value={this.state.arcenumsSelected} handleChange={this.selectARCEnum.bind(this)} isAsync={false} options={this.state.listArcenums} multi={false} placeholder="Select ARCEnums" className={'select--flex'} />} />
                    <View styles={{ margin: 1 + 'rem' }} node={<DropDown isAsync={false} options={this.state.listArcenums} multi={true} placeholder="Select ARCEnums" className={'select--flex'} />} />
                </div>
                {
                    this.state.arcenumsSelected && this.state.arcenumsSelected.length !== 0 ?
                        <pre>
                            <h3> ARCENUMKY: {this.state.arcenumsSelected}</h3>
                            <hr />
                            <code style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}>
                                {
                                    JSON.stringify(this.state.arcenumsSelectedDetail)
                                }
                            </code>
                        </pre> : ''
                }
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