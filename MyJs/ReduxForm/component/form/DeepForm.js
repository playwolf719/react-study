import React, { Component, PropTypes } from 'react'
import { reduxForm, addArrayValue } from 'redux-form'

import TextInput from '../input/TextInput.js'
import CombineInput from '../input/CombineInput.js'
import validate from './validateDeepForm'
export const fields = [
  'username',
  'othername',
  'children[].testname',
  'children[].othername',
  'children[].awards[]',
  "test.combname1",
  "test.combname2",
  "test.phones[]",
]

class DeepForm extends Component {
  render() {
    const {
      addValue,
      fields: { username, othername, children,test},
      handleSubmit,
      resetForm,
      invalid,
      submitting
    } = this.props
    console.log("------re render DeepForm------");
    var a=validate;
    console.log(a);
    return (<form onSubmit={handleSubmit}>

        <div>
          <fieldset>
            <legend>CombineInput</legend>
            <CombineInput {...test} formProps={this.props} />
          </fieldset>
        </div>
    	<div>-----------------------------</div>

        <TextInput {...username} formProps={this.props} />
        <TextInput {...othername} formProps={this.props} />

        <div>
          <button type="button" onClick={() => {
            children.addField()    // pushes empty child field onto the end of the array
          }}><i/> Add Child
          </button>
          <button type="button" onClick={() => {
            children.addField({     // pushes child field with initial values onto the end of the array
              testname: 'Bobby Tables',
              othername: 'Bobby',
            })
          }}><i/> Add Bobby
          </button>
        </div>
        {!children.length && <div>No Children</div>}

        { children.map((child, index) => <div key={index}>
            <label>Child #{index + 1}</label>
        	<TextInput {...child.testname} formProps={this.props} />
        	<TextInput {...child.othername} formProps={this.props} />
		<div>

            <div>
              <button type="button" onClick={() => {
                child.awards.addField()  // pushes empty award field onto the end of the array
              }}><i/> Add Award
              </button>
              <div>
                <button type="button" disabled={index === 0} onClick={() => {
                  children.swapFields(index, index - 1)  // swap field with it's predecessor
                }}><i/>
                </button>
                <button type="button" disabled={index === children.length - 1} onClick={() => {
                  children.swapFields(index, index + 1)  // swap field with it's successor
                }}><i/>
                </button>
              </div>
              <button type="button" onClick={() => {
                children.removeField(index)  // remove from index
              }}><i/> Remove
              </button>
            </div>
          </div>

          {child.awards.map( (award, awardIndex) => <div key={awardIndex}>
            <div>
              <label>Award #{awardIndex + 1}</label>
              <div>
        		<TextInput {...award} formProps={this.props} />
              </div>
              <div>
                <button type="button" onClick={() => {
                  child.awards.removeField(awardIndex) // remove from awardIndex
                }}><i/></button>
              </div>
            </div>
          </div>) }

        </div>) }

        <div>
          <button type="submit" disabled={submitting || invalid}>
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

DeepForm.propTypes = {
  addValue: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'deep',
  fields,
  validate
}, undefined, {
  addValue: addArrayValue // mapDispatchToProps (will bind action creator to dispatch)
})(DeepForm)
