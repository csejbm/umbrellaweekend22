import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Background from '../images/UWTrippyBack.jpg'


const Experience = () => (
  <Layout>
    <Seo title="Covid Plan" />
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
         <h1>Covid plan for all guest, workers, and performers:</h1>
       </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Umbrella Weekend will be following closely with local officials to implement necessary safety precautions and will follow state and local health guidelines in place at the time of the event.
         </p>
         <h2>For all attendees:</h2>
         <p>
            Proof of full vaccination or a negative PCR or rapid antigen COVID-19 test result that was administered by an official testing center will be accepted. Test results must be dated no more than 72 hours prior to entry. At-home testing kits that identify individuals and provide a timestamp of when the test is taken will be accepted for entry.
         </p>
         <p>
            Please bring a copy of your vaccination card, digital vaccine record, or negative test results and be prepared to provide it at the festival entrance. A photo of your vaccination card, digital vaccine record, or negative test results on your phone will also be accepted.
         </p>
         <h2>Food services and vendors</h2>
         <p>
           After being approved by the venue, food services and vendors must comply with our covid guidelines which includes proof of full vaccination or a negative PCR or rapid antigen COVID-19 test result that was administered by an official testing center no more than 72 hours prior to the event. 
         </p>
         <h2>Restrooms</h2>
         <p>
           Outdoor restrooms and hand washing stations will be provided through the festival ground in accordance to the number of staff and attendees. The facilities will be cleaned daily and remain stocked with proper sanitation supplies (toilet paper, hand sanitizer, seat covers). 
         </p>
       </Col>
      </Row>
    </Container>
    </div>
  </Layout>
)

export default Experience
