import { connect } from 'react-redux'
import { toggleTest } from '../actions'
import TestLink from '../components/TestLink.js'

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  console.log(ownProps);
  return {
    active: ownProps.filter === state.test
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(toggleTest(ownProps.filter))
    }
  }
}

const TestLinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestLink)

export default TestLinkContainer
