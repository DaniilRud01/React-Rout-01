import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'
import Header from './header'

const Dummy = () => {
  return (
    <div>
      <Head title="Hello" />
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          This is Dummy component <br />
          <Link to="/dashboard">Go To Dashboard</Link>
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
