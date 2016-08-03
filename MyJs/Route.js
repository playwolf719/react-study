import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import ProsAndState from './ProsAndState/ProsAndState.js';



render((
    <Router history={hashHistory}>
        <Route path="/ProsAndState"  component={ProsAndState}/>
    </Router>
), document.getElementById('Content'));
