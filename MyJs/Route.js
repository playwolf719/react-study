import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import PropsAndState from './PropsAndState/PropsAndState.js';
import Test from './Animation/Animation.js';
import Carousel from './Animation/Carousel.js';
import Redux from './Redux/Redux.js';
import ReduxForm from './ReduxForm/ReduxForm.js';


render((
    <Router history={hashHistory}>

    {/* <Route path="/"  component={Test} /> */}
        <Route path="/props" /*组件内注释*/  component={PropsAndState} />
        <Route path="/ani/1" /*组件内注释*/  component={Test} />
        <Route path="/ani/2" /*组件内注释*/  component={Carousel}/>
        <Route path="/redux" /*组件内注释*/  component={Redux}/>
        <Route path="/redux-form/:type"  component={ReduxForm}/>
    </Router>
), document.getElementById('Content'));
