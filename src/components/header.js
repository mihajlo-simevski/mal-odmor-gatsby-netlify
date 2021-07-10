import React from "react"
import { Link } from "gatsby"
import logo from "../images/logoMalOdmor.svg"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/header.scss'

const Header = ({ siteTitle, menuLinks }) => (
  
  
  <nav id="navbar-primary" className="navbar" role="navigation">
      <div className="container-fluid">
                 
              <ul className="nav navbar-nav">      
                  {menuLinks.map(link => (
                      <>
                      {link.imageUrl ? 
                      <li
                          key={link.name}
                          style={{
                              listStyleType: `none`,
                              padding: `1rem`,
                              background: `none`,
                              
                          }}
                      >
                          <Link style={{ color: `white` }} to={link.link}>
                              <img id="logo-navbar-middle" src={logo} width="300" alt="Logo Thing main logo" />
                          </Link>
                      </li> : <li
                          key={link.name}
                          style={{
                              listStyleType: `none`,
                              padding: `1rem`,
                          }}
                      >
                          <Link style={{ color: `white`, fontFamily: "Segoe UI",
    fontWeight: 700 }} to={link.link}>
                              {link.name}
                          </Link>
                      </li> }
                    </>
                  ))} 
              </ul>
            
      </div>
  </nav>

  
)


export default Header
