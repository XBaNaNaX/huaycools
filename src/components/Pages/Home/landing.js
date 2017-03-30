import React, { Component } from 'react';

import TentButton from '../../../components/controls/Buttons/tent-button';

// calendar
import Calendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'

// Responsive block
import ResponsiveBlock from '../../../components/Example/ResponsiveBlock';

// Responsive block
import DropDown from '../../../components/Example/DropDown';

// View
import View from '../../../components/View';

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
    render() {
        return (
            <div className='container'>
                <h1 style={{ display: 'block' }}>Button Components</h1>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TentButton
                        handleClick={() => { console.log('clicked') }}
                        text='clear'
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
                        handleClick={() => { console.log('clicked') }}
                        text='filled danger'
                        buttonClass='filled'
                        theme='danger'
                    />
                </div>
                <hr />
                <h1 style={{ display: 'block' }}>Calendar Components</h1>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Calendar
                        width={400}
                        height={400}
                        selected={today}
                        disabledDays={[0, 6]}
                        minDate={lastWeek}
                    />
                    <Calendar
                        width={600}
                        height={400}
                        selected={today}
                        disabledDays={[0, 6]}
                        minDate={lastWeek}
                        displayOptions={{
                            layout: 'landscape'
                        }}
                    />
                </div>
                <hr/>
                <h1 style={{ display: 'block' }}>React - Select</h1>
                <div style={{ display: 'block', textAlign: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View styles={{width: 33.33+'%',margin:1 + 'rem'}} node={<DropDown placeholder="Example select ..." className={'select--flex'} />}/>
                        <View styles={{width: 33.33+'%',margin:1 + 'rem'}} node={<DropDown placeholder="Example select ..." className={'select--flex'} />}/>
                        <View styles={{width: 33.33+'%',margin:1 + 'rem'}} node={<DropDown placeholder="Example select ..." className={'select--flex'} />}/>
                    </div>
                    <View styles={{margin:1 + 'rem'}} node={<DropDown multi={true} placeholder="Example multi select ..." className={'select--flex'} />}/>
                </div>
                <hr />
                <h1 style={{ display: 'block' }}>Responsive Block</h1>
                <div style={{ display: 'block', textAlign: 'center' }}>
                    <ResponsiveBlock styles={blockStyle} />
                </div>
                <hr/>
            </div>
        );
    }
}

export default Landing;