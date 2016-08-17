import React, { Component, PropTypes } from 'react'
import TextInput from './TextInput.js'

class CombineInput extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.phones !== nextProps.phones
  }

  render() {
    const { street, city, phones } = this.props
    return (<div>
        <TextInput {...username} formProps={this.props.formProps} />
        <TextInput {...othername} formProps={this.props.formProps} />

        <div>
          <button type="button" onClick={event => {
            event.preventDefault()  // prevent form submission
            phones.addField()       // pushes empty phone field onto the end of the array
          }}><i/> Add Phone
          </button>
        </div>
        {phones.map((phone, index) =>
          <TextInput {...phone} formProps={this.props.formProps} />
        )}
      </div>
    )
  }
}

CombineInput.propTypes = {
  phones: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CombineInput