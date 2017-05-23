import React from 'react';
import ReactDOM from 'react-dom';
//import Bert from "meteor/bert";
import registerServiceWorker from './registerServiceWorker';
import './scss/index.css';

import {
    Switch,
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

//Component
import Container from './container';
//import LoginPage from './screen/login_page';
import GrommetApp from 'grommet/components/App';




//TODO Implement React Helmet for better SEO
let root = document.getElementById('root');
let Routes =  (
    <GrommetApp centered={false}>
        <Router>
            <Switch>
                <Route exact path='/' component={Container} />
                <Route path='app' component={Container} />
            </Switch>
        </Router>
    </GrommetApp>
);
ReactDOM.render(Routes, root);
registerServiceWorker();          