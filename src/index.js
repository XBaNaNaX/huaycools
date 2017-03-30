import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// tent css
import 'tent-css/dist/tent.css'

import todoApp from './reducers'
import App from './components/App';
import NotFound from './components/Pages/NotFound';
import './index.css';

import createHistory from 'history/createBrowserHistory'

import logo from './logo.svg';
import Navs from './components/Nav'
// import StaticNav from './components/Nav/staticNav'
import Home from './components/Pages/Home/landing'

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

const history = createHistory()
let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const menus = [
    {
        link: '/',
        label: 'home'
    },
    {
        link: '/app',
        label: 'app'
    },
    {
        link: '/about',
        label: 'about'
    },
    {
        link: '/topics',
        label: 'topics'
    }
]

const About = () =>
    <div>
        <h3> About </h3>
    </div>

const Contact = () =>
    <div>
        <h3> Contact </h3>
        <ul>
            <li> Mateusz Zatorski </li>
            <li> Github: < a href="https://github.com/knowbody"> knowbody </a></li>
        </ul>
    </div>

render(<
    Provider store={store}>
    <ConnectedRouter history={history}>

        <Router>
            <div>
                <Navs title='Hello'
                    logo={logo}
                    menus={menus}
                />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/app" component={App} />
                    <Route path="/about" component={About} />
                    <Route path="/topics" component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    </ConnectedRouter>
</Provider>,
    document.getElementById('root')
);