/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          /*padding: `0 1.0875rem 1.45rem`,*/
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            padding: `2rem`,
            backgroundColor: '',
          }}
        >
          <Container className='text-center'>
              <Link className="social-link" to="https://instagram.com/theafternoonumbrellafriends"><InstagramIcon/> instagram</Link>
              <Link className="social-link" to="htts://facebook.com/theafternoonumbrellafriends"><FacebookIcon/> facebook</Link>
              <Link className="social-link" to="htts://soundcloud.com/theafternoonumbrellafriends">Soundcloud</Link>
          </Container>
          <Container className='text-right'>
            <p>© {new Date().getFullYear()} The Afternoon Umbrella Friends</p>
          </Container>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
