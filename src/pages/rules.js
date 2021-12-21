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
    <Seo title="Rules" />
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
         <h1>Rules & Regulations</h1>
       </Col>
      </Row>
      <Row>
        <Col>
          <p>
          Gates open Friday March, 26th from 8am - MIDNIGHT.  The gate will be open from 8am - MIDNIGHT each day of the festival. 
          <br/>Do not park anywhere along the road into the festival. Plan your arrival inside of gate hours.  Anyone parked on the road will be subject to towing. 
          <br/>Music starts at 11am on Friday and goes nonstop for 60 hours straight!
         </p>
       </Col>
       <StaticImage
          src="../images/umbrellaweekend3.jpeg"
          quality={99}
          formats={["auto", "webp",]}
          alt="umbrella weekend 3"
        />
      </Row>
    </Container>
    </div>
  </Layout>
)

export default Experience
