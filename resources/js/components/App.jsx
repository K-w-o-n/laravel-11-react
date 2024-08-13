import React from 'react'
import Router from '../routers/Index'
import { NavLink } from 'react-router-dom'

const App = () => {
  return (
    <div>
        <h1>hello react !</h1>
        <nav>
            <NavLink to='/' className={({isActive}) => (isActive ? 'active' : "")}>
                GO To home page
            </NavLink>
            <NavLink to='/about'  className={({isActive}) => (isActive ? 'active' : "")}>
                GO To About page
            </NavLink>
            <NavLink to='/*'>
                Not Found!
            </NavLink>
        </nav>
        <Router/>
    </div>
  )
}

export default App
