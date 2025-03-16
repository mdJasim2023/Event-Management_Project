import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div className='d-flex justify-content-between navbar'>
        <p className='w-50'> L O G O </p>
        <ul className='d-flex justify-content-around align-items-center w-50'>
            <Link to='/home'><li>Home</li></Link>
            <li>About</li>
            <li>Contact</li>
            <div>
                <button className='btn btn-success'>Register</button> &nbsp;&nbsp;
                <Link to='/gotologinpage'><button className='btn btn-warning'>Login</button></Link>
            </div>
        </ul>
    </div>
  )
}

export default Nav