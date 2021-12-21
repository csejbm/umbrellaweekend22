import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Anchor, Box, Header, Menu, ResponsiveContext, Grommet } from 'grommet';
import Navbar from 'react-bootstrap/navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

const Head = ({ siteTitle }) => (
  <div style={{top: 0, background: 'white', color: 'black', zIndex: 2, position: 'sticky'}}>
    <Navbar collapseOnSelect expand="lg" bg="" variant="light">
      <Container>
        <Navbar.Brand>
        <Link className="nav-link" to="/">
          <StaticImage
                src="../images/aufsitelogo.png"
                width={36}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Logo"
                loading="eager"
                style={{position: "relative" }, {verticalAlign: "middle"}}
              />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" id="experience-nav-dropdown">
          <NavDropdown title="Experience">
            <NavDropdown.Item><Link className="nav-link" to="/lineup/">Lineup</Link></NavDropdown.Item>
            <NavDropdown.Item><Link className="nav-link" to="/umbrellavation/">Umbrellavation</Link></NavDropdown.Item>
            <NavDropdown.Item><Link className="nav-link" to="/festival-map/">Festival Map</Link></NavDropdown.Item>
            <NavDropdown.Item><Link className="nav-link" to="/experience/">Umbrella Handbook</Link></NavDropdown.Item>
          </NavDropdown>
            <NavDropdown title="Information" id="collasible-nav-dropdown">
              <NavDropdown.Item><Link className="nav-link" to="/information/">Hours & Info</Link></NavDropdown.Item>
              <NavDropdown.Item><Link className="nav-link" to="/covid/">Covid Policy</Link></NavDropdown.Item>
              <NavDropdown.Item><Link className="nav-link" to="/medical/">Health & Safety</Link></NavDropdown.Item>
              <NavDropdown.Item><Link className="nav-link" to="/rules/">Rules & Regulations</Link></NavDropdown.Item>
            </NavDropdown>
            <Link className="nav-link" to="/location/">Location</Link> 
            <Link className="nav-link" to="/about/">About</Link> 
            <Link className="nav-link" to="https://theafternoonumbrellafriends.com/contact-us/" target="blank">Contact Us</Link> 
            <Link className="nav-link" to="/get-involved/">Get Involved</Link>
          </Nav>
          <Nav>
            <Link className="tickets" target="blank" to="https://arep.co/p/umbrella-weekend-2022">Register For Presale</Link>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Head
