import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import TextInput from '../input/TextInput.js'
export const fields = [ 'username' ,"othername"]

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


class SynchronousValidationForm extends Component {
  // constructor(props) {
  //   super(props);
  // }

  myClickForm(){
    console.log("-----form---------");
    console.log(this.props);
  }
  render() {
    const { fields: { username,othername }, resetForm, handleSubmit, submitting } = this.props
    return (<form onSubmit={handleSubmit} onClick={this.myClickForm.bind(this)}>
        <TextInput {...username} formProps={this.props} />
        <TextInput {...othername} formProps={this.props} />
        <div>
          <button type="submit" disabled={submitting}>
            {submitting ? <i/> : <i/>} Submit
          </button>
          <button type="button" disabled={submitting} onClick={resetForm}>
            Clear Values
          </button>
        </div>
      </form>
    )
  }
}

SynchronousValidationForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm(
  {
    form: 'synchronousValidation',
    fields,
    validate
  }
//   ,
//   /* mapStateToProps = */ undefined,
// /* mapDispatchToProps = */ function(dispatch) {
//     return {
//         // This will be passed as a property to the presentational component
//         myTouch: function(field) {
//             dispatch(touch("synchronousValidation", field))
//         }
//     }
//   }
)(SynchronousValidationForm)