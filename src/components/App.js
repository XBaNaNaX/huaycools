import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import TodoApp from '../components/Todo'
import Button from '../components/controls/Buttons'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <TodoApp />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
          <Button handleClick={() => { alert('click') }} text={'outline'} theme={'outline'} />
          <Button handleClick={() => { alert('click') }} text={'default'} />
          <Button handleClick={() => { alert('click') }} text={'animate'} theme={'animate'} />

          <Button handleClick={() => { alert('click') }} text={'Clear Button'} isCleared={true} theme={'clear'}/>
        </div>
      </div>
    );
  }
}

export default App;
