import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Main from '../components/Main'
import ErrorComponent from '../components/ErrorComponent'
import Home from '../components/Home'
import Profile from '../components/Profile'
import Following from '../components/Following'
import Followers from '../components/Followers'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route exact path="/home" component={Home}/>
      <Route path="/:handle/following" render={props => (
        <Following key={props.location.pathname} {...props} />)} 
      />
      <Route path="/:handle/followers" render={props => (
        <Followers key={props.location.pathname} {...props} />)} 
      />
      <Route path="/:handle" render={props => (
        <Profile key={props.location.pathname} {...props} />)} 
      />
      <Route exact path="/404" component={ErrorComponent} />
      <Route component={ErrorComponent} />
    </Switch>
  </Router>
)

export default Routes;