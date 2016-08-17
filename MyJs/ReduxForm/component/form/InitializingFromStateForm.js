import React, { Component, PropTypes } from 'react'
import { reduxForm,initialize } from 'redux-form'

import TextInput from '../input/TextInput.js'

export const fields = [ 'username', 'othername' ]
const data = {  // used to populate "account" reducer when "Load" is clicked
  username: 'John',
  othername: 'Doe',
}
const data1 = {  // used to populate "account" reducer when "Load" is clicked
  username: '1111',
  othername: '222',
}


const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  }
  if (!values.othername) {
    errors.othername = 'Required'
  }
  return errors
}

const field1 = new Array("username","othername");
// const field1 = {  // used to populate "account" reducer when "Load" is clicked
//   username: 'username',
//   othername: 'othername',
// }
const colors = [ 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet' ]

class InitializingFromStateForm extends Component {
  componentWillMount(){
    // var _this=this;
    // setTimeout(function(){
    //   _this.props.initializeForm(data);
    // },2000)
  }
  myClick(){
    console.log(this.props);
    this.props.myInitForm(data1,field1);
  }
  render() {
    const { fields: { username, othername }, handleSubmit, load, submitting } = this.props
    return (
      <div >
        <div>
          <button type="button" onClick={this.myClick.bind(this)}>Load Account</button>
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
    fields,
    validate
  }
  ,
  
  undefined,

  function(dispatch) {
    return {
        // This will be passed as a property to the presentational component
        myInitForm: function(datas,fields) {
            dispatch(initialize('initializing', datas,fields))
        }
    }
  }
)(InitializingFromStateForm)