import React, { Component, PropTypes } from 'react'
import TextInput from './TextInput.js'

class CombineInput extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.combname1 !== nextProps.combname1 ||
      this.props.combname2 !== nextProps.combname2 ||
      this.props.phones !== nextProps.phones
  }

  render() {
    const { combname1, combname2, phones } = this.props
    return (<div>
        <TextInput {...combname1} formProps={this.props.formProps} />
        <TextInput {...combname2} formProps={this.props.formProps} />

        <div>
          <button type="button" onClick={event => {
            event.preventDefault()  // prevent form submission
            phones.addField()       // pushes empty phone field onto the end of the array
          }}><i/> Add Phone
          </button>
        </div>
        {phones.map((phone, index) =>
          <TextInput key={index} {...phone} formProps={this.props.formProps} />
        )}
      </div>
    )
  }
}

CombineInput.propTypes = {
  phones: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CombineInput