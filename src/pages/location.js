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
         <h1>Location</h1>
       </Col>
      </Row>
      <Row>
        <Col>
          <p>
          Venue location is just 1.5 hours Northeast of San Diego in the Temecula Valley.  Specific venue directions will be emailed out to all ticket holders the week of the event. Please be on the lookout! If you do not not get an email by March 20th contact support at info@theafternoonumbrellafriends.com
         </p>
         <h2>Weather</h2>
         <p>
          Temperatures can range from the 80s in the day to the 30s at night. Be prepared for extreme heat and cold. The region has historically received snow during this time period, so pack accordingly!
         </p>
         <h2>Onsite Parking, Camping, and Car Camping</h2>
         <p>
          A General Admission Ticket gives you access to tent camping and all of the amenities of the festival. With the Car Camping Pass, you can park and camp in the designated Car Camping Area. The parking attendant will direct you if you need help. Please do not camp within the vehicle access zones. Please pack in tight. Work with your neighbors. Do not hold large sections of space unless you received placement for a Theme Camp by Umbrella Staff. 
         </p>
         <h2>CARPOOL! CARPOOL! CARPOOL!</h2>
         <p>
           As per our venue agreement, we will be charging a $20 fee to any vehicles coming with 3 or less riders without a car camping pass. Car camping passes are $40 and need to be purchased in advance of the event.
        </p>
        <h2>RV</h2>
        <p>
          We have a limited number of RV Passes available on our ticketing platform. If you are unable to purchase a pass before supplies run out, please contact us to be notified if and when more passes are available.
        </p>
       </Col>
      </Row>
      <StaticImage
          src="../images/venue3.jpeg"
          quality={99}
          formats={["auto", "webp",]}
          alt="festival location"
        />
    </Container>
    </div>
  </Layout>
)

export default Location
