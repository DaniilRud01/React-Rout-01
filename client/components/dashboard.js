import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div id="title">
      HOME PAGE
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <Link to="/dashboard/profile/abra"> Go To Profile </Link>
          <Link to="/dashboard/main"> Go To Main </Link>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
