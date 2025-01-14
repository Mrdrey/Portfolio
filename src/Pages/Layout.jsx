import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './css/Layout.css'

const Layout = () => {

  return (
    <>
        <header>
            <div className="header">
                <div className="title">
                    <h1>Andre Brizuela</h1>
                </div>
            </div>

            <nav>
          <ul>
            <li>
              <Link to="/" >About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        </header>
        <Outlet/>
    </>
  )
}

export default Layout