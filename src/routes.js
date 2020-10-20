import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/forgotpassword" component={ForgotPassword} />
      <Route path="/signup" component={SignUp} />
      <Redirect to="/" />
    </Router>
  )
}

export default Routes
