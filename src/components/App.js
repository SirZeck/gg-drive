import React from "react"
import Signup from "./Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Profile from "./Profile";
import Login from "./Login";
import PrivateRoute from './PrivateRoute'
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Dashboard from "./gg-drive/Dashboard";


function App() {
  return (
        <Router>
          <AuthProvider>
            <Switch>
              {/* Drive */}
              <PrivateRoute exact path="/" component={Dashboard}/>

              {/* Profile */}
              <PrivateRoute path="/user" component={Profile} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />

              {/* Auth */}
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
  )
}

export default App;
