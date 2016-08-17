import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'

import TextInput from '../input/TextInput.js'

import { load as loadAccount } from '../reducer/account.js'
export const fields = [ 'username', 'othername' ]
const data = {  // used to populate "account" reducer when "Load" is clicked
  username: 'John',
  othername: 'Doe',
}
const colors = [ 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet' ]

class InitializingFromStateForm extends Component {
  componentWillMount(){
    var _this=this;
    setTimeout(function(){
      _this.props.initializeForm(data);
    },2000)
  }
  myClick(){
    console.log(this.props);
  }
  render() {
    const { fields: { username, othername }, handleSubmit, load, submitting } = this.props
    return (
      <div onClick={this.myClick.bind(this)}>
        <div>
          <button type="button" onClick={() => load(data)}>Load Account</button>
        </div>
        <form onSubmit={handleSubmit}>

        <TextInput {...username} formProps={this.props} />
        <TextInput {...othername} formProps={this.props} />

          <div>
            <button type="submit" disabled={submitting}>
              {submitting ? <i/> : <i/>} Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

InitializingFromStateForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm(
  {
    form: 'initializing',
    fields
  },
  
/* mapStateToProps = */ undefined,
/* mapDispatchToProps = */ function(dispatch) {
    return {
        // This will be passed as a property to the presentational component
        changeFieldValue: function(field, value) {
            dispatch(change(form, field, value))
        }
    }
  }
)(InitializingFromStateForm)