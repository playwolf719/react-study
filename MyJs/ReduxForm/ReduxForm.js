import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer,reduxForm} from 'redux-form';

import SynchronousValidationForm from './component/form/SynchronousValidationForm.js'
import InitializingFromStateForm from './component/form/InitializingFromStateForm.js'

const reducers = {
    // ... your other reducers here ...
    form: formReducer     // <---- Mounted at 'form'. See note below.
}
const reducer = combineReducers(reducers);

let store = createStore(reducer);

export default class ReduxForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let form ="";
    switch(this.props.params.type){
        case "sync":
            form=<SynchronousValidationForm />;
            break;
        case "init":
            form=<InitializingFromStateForm />;
            break;
        default :
            break;

    }

    return <Provider store={store}>
        {form}
    </Provider>;
  }
}
