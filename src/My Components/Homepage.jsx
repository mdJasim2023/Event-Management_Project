import React from 'react'
import { Link } from 'react-router-dom'
function Homepage() {
  return (
    <div className='d-flex justify-content-center homepage'>
        <div className='d-flex align-items-center'>
            <Link to='/eventlist'><button className='btn btn-danger form-control p-4 text-light'>EVENTS &#x2192;</button></Link>
        </div>
    </div>
  )
}

export default Homepage