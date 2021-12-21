import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from 'react-bootstrap/Container'
import Background from '../images/UWTrippyBack.jpg'


const Contact = () => (
  <Layout>
    <Seo title="Contact Us" />
    <Container className="text-center" 
      style={{background: `url(${Background})`, 
      }}
    >
      <h1>Contact Coming Soon!</h1>
      <p>test
      </p>
    </Container>
  </Layout>
)

export default Contact
