import React from 'react'
import { Route } from 'react-router-dom'
import Main from './main'
import Dashboard from './dashboard'
import Header from './header'
import Profile from './profile'

const Home = () => {
  return (
    <div>
      <Header />
      <Route exact path="/dashboard" component={() => <Dashboard />} />
      <Route exact path="/dashboard/main" component={() => <Main />} />
      <Route exact path="/dashboard/profile/:user" component={() => <Profile />} />
    </div>
  )
}

Home.propTypes = {}

export default Home
