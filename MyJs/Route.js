import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import ProsAndState from './ProsAndState/ProsAndState.js';
import Test from './Animation/Animation.js';
import Carousel from './Animation/Carousel.js';




render((
    <Router history={hashHistory}>

    {/* <Route path="/"  component={Test} /> */}
        <Route path="/props" /*组件内注释*/  component={ProsAndState} />
        <Route path="/ani/1" /*组件内注释*/  component={Test} />
        <Route path="/ani/2" /*组件内注释*/  component={Carousel}/>
    </Router>
), document.getElementById('Content'));
