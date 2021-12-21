import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Background from '../images/UWTrippyBack.jpg'
import { StaticImage } from "gatsby-plugin-image"


const Experience = () => (
  <Layout>
    <Seo title="Festival Map" />
    <div
          style={{background: `url(${Background})`, 
          backgroundSize: '100%  auto',
          backgroundRepeat: 'no-repeat',
          minHeight: 1024,
          }}
    >
    <Container className="text-center">
      <Row className="py-3">
        <Col>
         <h1>Festival Map Coming Soon!</h1>
       </Col>
      </Row>
      <Row>
        <Col>
          <p>
            The Umbrella Weekend Website will continue to be updated with more awesome content as the festival approaches!
         </p>
       </Col>
       <StaticImage
          src="../images/venue1.jpeg"
          quality={99}
          formats={["auto", "webp",]}
          alt="festival map"
        />
      </Row>
    </Container>
    </div>
  </Layout>
)

export default Experience
