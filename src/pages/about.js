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
    <Seo title="Location" />
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
         <h1>About Umbrella Weekend</h1>
       </Col>
      </Row>
      <Row className="align-items-center py-4">
        <Col md>
          <p>
          The Afternoon Umbrella Friends were born as a fun group of silly humans who simply wanted to enjoy life together. In our infancy, we were simply looking for a new name for our festival camp. The Facebook group we used to organize ourselves was literally called "The Camp with No Name". With all the awesome camping festivals bumping year round, it was hard for us to coordinate and go to all the same ones. So we decided to organize our very own camp reunion - the first Umbrella Weekend.
         </p>
         </Col>
         <Col md>
          <StaticImage
            src="../images/umbrellaweekend1.jpg"
            quality={99}
            formats={["auto", "webp",]}
            alt="Umbrella Weekend 1"
          />
         </Col>
      </Row>
      <Row className="align-items-center py-4">
           <Col md={{order: 'last'}}>
              <p>
              Nestled in the desert of Apple Valley, we transformed the space between some boulders into a magical haven for us all to reunite. It was a blast doing our own thing and actually curating an experience from the ground up. More friends quickly learned about it, so as our group grew we realized that our next reunion needed to be bigger and better.
              </p>  
          </Col>
          <Col md>
          <StaticImage
            src="../images/umbrellaweekend2.jpeg"
            quality={99}
            formats={["auto", "webp",]}
            alt="Umbrella Weekend 2"
          />
          </Col>
     </Row>
     <Row className="align-items-center py-4">
       <Col md>
          <p>
            Four Umbrella Weekends later, we're still just doin the same ol' thang -- bringing our friends together. But now we've got a lot more experience under our belts and even WAY more new friends bringing their hard work and talent to the cause. For us, Umbrella Weekend has always felt like the most epic weekend of the year. Whether you've been before or you're coming for the first time, we hope it'll be one of your favorite weekends too.
          </p>
        </Col>
        <Col md>
        <StaticImage
            src="../images/umbrellaweekend4.jpeg"
            quality={99}
            formats={["auto", "webp",]}
            alt="Umbrella Weekend 2"
          />
        </Col>
      </Row>
    </Container>
    </div>
  </Layout>
)

export default Location
