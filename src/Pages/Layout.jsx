import React ,{useState}from 'react'
import { Outlet} from "react-router-dom";
import { Link, NavLink } from "react-router";
import './css/Layout.css'
import Footer from '../components/Footer';
const Layout = () => {

  return (
    <>
        <header>
            <div className="header">
                <div className="title">
                   <Link to='/' className="name-link" ><h1>Andre Brizuela</h1></Link>
                </div>
            </div>

            <nav>
          <ul>
            {/* <li>
              <NavLink to='/' >Home</NavLink>
            </li> */}
            <li>
              <NavLink to='/about' >About</NavLink>
            </li>
            <li>
              <NavLink to='/projects' >Projects</NavLink>
            </li>
            <li>
              <NavLink to='/contact' >Contact</NavLink>
            </li>
          
          </ul>
        </nav>

        
        </header>
        
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout