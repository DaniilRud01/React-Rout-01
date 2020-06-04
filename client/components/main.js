import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div id="title">
      MAIN
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <Link to="/dashboard/profile/abra">Go To Profile</Link>
          <Link to="/dashboard">Go To Root</Link>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
