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
    <Seo title="Medical" />
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
         <h1>Umbrella Weekend Medical and Safety Info:</h1>
       </Col>
      </Row>
      <Row>
        <Col>
          <p>
            The Umbrella team aims to create the perfect environment for our attendees to feel comfortable and safe at our festival. We encourage everyone to enjoy their time to the fullest at Umbrella Weekend in a responsible manner. Our medical team will be on standby for any situation with full discretion and non judgmental care. If you need any help or see someone who may need help, do not hesitate to ask for assistance. We are here to ensure your time at our festival is everything it deserves to be.
         </p>
         <h2>Emergency medical & first aid services:</h2>
         <p>
             Anza Community Health Center. 951-763-4759 
             <br />
             Eisenhower Health. 39000 Bob Hope drive 760-340-3911
             <br />
             Rancho Springs Medical Center. 951-696-6000
             <br  />
             Riverside County Sheriff's Office. 951-791-3400
             <br />
             Riverside County Covid information and updates: https://rivco.org/covid-19
         </p>
         <h2>Event Medical Services application</h2>
         <p>
            Hello, Im Will from The Afternoon Umbrella Friends. We are seeking event medical services for our music festival Umbrella Weekend in Riverside, California March 24th-28th 2022. We will be expecting around 1000-1500 people in attendance including artists,staff, and attendees. We ideally would like 24 hour on-call medical staff during the festival hours and a designated medical tent for discrete nonjudgmental medical services. We are currently working with Riverside county and the venue owners for proper permits and the next step is to provide a medical services plan. 
         </p>
       </Col>
      </Row>
    </Container>
    </div>
  </Layout>
)

export default Experience
