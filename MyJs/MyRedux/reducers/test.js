const test = (state="hehe", action) => {
  switch (action.type) {
    case 'MY_TEST':
      return action.filter
    default:
      return state
  }
}

export default test
