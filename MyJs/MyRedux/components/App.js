import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import TestLinkContainer from '../containers/TestLinkContainer'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <TestLinkContainer filter="tfuck">shit</TestLinkContainer>
    {", "}
    <TestLinkContainer filter="tfuck1">shit1</TestLinkContainer>
  </div>
)

export default App
