import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import logo from "../images/logoMalOdmor.svg"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/header.scss'

const Header = ({ siteTitle, menuLinks }) => (
  
  
  <nav id="navbar-primary" className="navbar" role="navigation">
      <div className="container-fluid">          
              <ul className="nav navbar-nav">
                  {menuLinks.map(link => (
                      <li
                          key={link.name}
                          style={{
                              listStyleType: `none`,
                              padding: `1rem`,
                          }}
                      >
                          <Link style={{ color: `white` }} to={link.link}>
                              {link.imageUrl ? <img id="logo-navbar-middle" src={logo} width="250" alt="Logo Thing main logo" /> : link.name}
                          </Link>
                      </li>
                  ))}
              </ul>
      </div>
  </nav>

  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
