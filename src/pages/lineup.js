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
    <Seo title="Experience" />
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
         <h1>Lineup Coming Soon!</h1>
       </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Keep an eye on our socials for lineup drops!
         </p>
       </Col>
       </Row>
        <StaticImage
          src="../images/headphones.jpeg"
          quality={99}
          formats={["auto", "webp",]}
          alt="headphones"
        />
    </Container>
    </div>
  </Layout>
)

export default Experience
