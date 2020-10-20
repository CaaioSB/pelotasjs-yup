import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './pages/Login/Login'

const Routes = () => {
  return (
    <Router>
      <Route path="/" component={Login} />
    </Router>
  )
}

export default Routes
