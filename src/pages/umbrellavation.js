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
          backgroundSize: '100%  100%',
          backgroundRepeat: 'no-repeat',
          minHeight: 1024,
          }}
    >
    <Container className="text-center">
      <Row className="py-3">
        <Col>
         <h1>Umbrellavation</h1>
       </Col>
      </Row>
      <Row className="align-items-center py-4">
        <Col md>
          <p>
            The mission behind Umbrellavation is to connect, inspire, and create beyond the dance floor! Umbrellavation aims to holistically nurture our community in all areas unrelated to music and DJ-ing.
            <br/>Lots of things fall under Umbrellavation: workshops, artists, art installations, vendors, theme camps, dancers/flow performers, and everything in between. With a focus on promoting wellness, we believe having a strong foundation outside of the party is what makes a community special.
         </p>
       </Col>
       <Col md>
       <StaticImage
          src="../images/umbrellavation2.jpeg"
          quality={99}
          formats={["auto", "webp",]}
          alt="Umbrellavation Yoga"
        />
       </Col>
      </Row>
      <Row className="align-items-center py-4">
        <Col md={{order:  'last'}}>
          <p>
            Born from a Day of Wellness event we hosted in January 2020, Umbrellavation began as a group of ambassadors passionate about the Umbrella vision. We wanted to create experiences outside our regular weekend shindigs, strengthen our friendships, and encourage each other's growth. Two years later, this intention has grown to include all the fun and creative sides of the AUF community.
          </p>
        </Col>
        <Col md>
        <StaticImage
          src="../images/umbrellavation3.jpeg"
          quality={99}
          formats={["auto", "webp",]}
          alt="Umbrellavation Yoga"
        />
        </Col>
      </Row>
      <Row className="align-items-center py-4">
        <Col md>
        <p>
            During Umbrella Weekend 2020, the Umbrellavation Oasis was a dome structure located on the outskirts of the festival grounds where we retreated from the main event to relax and engage in intimate workshops. This year we're organizing fun activities, hosting artists and their installations, and creating awesome new creative spaces, each with their own flavory vibes.
          </p>
          <p>If you'd like to collaborate with us, <a href="">sign up here</a></p>
        </Col>
        <Col md>
        <StaticImage
          src="../images/umbrellavation4.jpeg"
          quality={99}
          formats={["auto", "webp",]}
          alt="Umbrellavation Yoga"
        />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Full info on the Umbrellavation Experience coming soon ;)</p>
        </Col>
      </Row>
    </Container>
    </div>
  </Layout>
)

export default Experience
