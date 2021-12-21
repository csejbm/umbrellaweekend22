import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Background from '../images/UWTrippyBack.jpg'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const Location = () => (
  <Layout>
    <Seo title="Get Involved" />
    <div
          style={{background: `url(${Background})`, 
          backgroundSize: '100%  100%',
          backgroundRepeat: 'no-repeat',
          minHeight: 1024,
          }}
    >
    <Container className="text-center">
      <Row className="py-3">
        <Col>
         <h1>Get Involved</h1>
       </Col>
      </Row>
      <Row>
        <Col>
          <p>
            we are always looking for new friends, stay tuned for the volunteer and umbrellavation signup forms
          </p>
       </Col>
      </Row>
      <StaticImage
          src="../images/dreamcatcher.jpeg"
          quality={99}
          formats={["auto", "webp",]}
          alt="festival location"
        />
    </Container>
    </div>
  </Layout>
)

export default Location
