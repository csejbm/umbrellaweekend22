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
         <h1>The Umbrella Weekend Survival Guide</h1>
       </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Umbrella Weekend will be taking place in the Cuyamaca Mountain region of the Temecula Valley. The temperatures can average between the mid-80s during the day and low 30s at night. This area is known to get high winds throughout the year. Mother Nature always does what she wants and you should be suitably prepared for extreme temperatures and high winds since those are always possible!
         </p>
         <p>
            The area where the event is held is ecologically diverse. While at the event you may encounter tarantulas, scorpions, kangaroo rats, snakes, bunnies, and coyotes. Always be aware that you are sharing the land with critters and treat any encounter with caution. As hard as we try, our presence will have an impact on the land, so please do your best to be a good steward and visitor. There are bushes and trees on the land which should be protected and respected. DO NOT burn any bushes, shrubs, grass or trees. If you encounter any spiders or snakes, do not touch them. Find someone with a radio to call the snake wrangler to remove and relocate the snake. Remember to check your shoes before putting them on as scorpions love to hangout there.
         </p>
         <h2>What to Bring</h2>
         <p>
         When you arrive, be prepared to be entirely self-reliant. Include ratchet straps or anchors for your structure or pop-up canopy. Pack clothing accordingly and dress in layers; articles can be added or removed depending on the rapid changes in temperature. Bring enough food and water to be self-reliant as there are limited food offerings. See the Snack List for ideas on packing camp-ready food.
         </p>
         <h3>MUST HAVES</h3>
         <p>
          - Photo ID (for check-in)<br/>
          - 1 gallon of water per person per day<br/>
          - A reusable water bottle<br/>
          - 3' rebar for structures<br/>
          - 12" stakes for tents<br/>
          - Rope or tie-down ratchet straps for canopies, tents etc.<br/>
          - Your Own Food & Beverages for the entire weekend<br/>
          - Extensive first-aid kit<br/>
          - Sunscreen/sunblock & Sunglasses<br/>
          - Warm clothing<br/>
          - Hand sanitizer<br/>
          - Garbage & recycling bags to clean your camp<br/>
          - Duct Tape<br/>
          - Headlamps & Flashlights with spare batteries<br/>
          - Walking around with no lights is totally not safe. Light yo self!<br/>
          - Tent with warm sleeping bags/bedding<br/>
          - Portable ashtrays if you smoke (Leave No Trace Event)<br/>
          - Prescriptions, contact lens supplies, and anything else you need to maintain your health in a remote area with no services<br/>
          - Positive attitude, open mind, a sense of humor and common sense
        </p>
        <h3>Should Haves</h3>
        <p>
        - Shade structures, umbrellas, parasols, sheets, something to break the midday sun<br/>
        - Cooking stove (propane tank stoves only) - NO OPEN FIRES<br/>
        - Lotion, lip balm, and earplugs - the music goes non-stop<br/>
        - Plastic bottles/tennis balls to top and protect dangerous rebar stakes<br/>
        - Extra set of car keys (they can easily get lost and a tow truck is really expensive)<br/>
        - A 5-gallon bucket (to collect waste)
        </p>
        <h3>Leave No Trace</h3>
        <p>
        The Afternoon Umbrella Friends believe that our events should leave the land better than we found it. Leave no trace (LNT) planning starts before you arrive. Make plans for Leave No Trace prior to packing. A great personal plan for Leave No Trace can keep the venue clean for all of us now and in the future. When packing, use the guidelines below to help you with your MOOP plan! (MOOP = Matter Out Of Place)
        </p>
        <p>
          - Before arriving, consider packing food and beverages in reusable containers to avoid bringing single-use/disposable plastic wrappers/containers.<br/>
          - Have a proactive plan for MOOP control in your area. Have daily MOOP sweeps or assign someone in your camp to be in charge of picking up MOOP.<br/>
          - Pack in and out everything you bring, make sure you leave space in your car to take the trash back with you. There are limited dumpsters on-site.<br/>
          - Pick up any MOOP you see while not at camp or on the dance floor.<br/>
          - Bring your own reusable cup and plates instead of one-time use paper plates and plastic cups.<br/>
          - Pack out all food, compost, and garbage. These are MOOP!<br/>
          - Cigarette butts are MOOP! Smokers be aware of and responsible for your butts, of any kind<br/>
          - Be mindful of costume materials. Don't bring things that will fall off your clothing, hat, or face. Props including feathers, beads, sequins, and glitter are also MOOP.<br/>
          - Test your items to withstand camping, dancing, and environmental exposure.<br/>
          - If you see someone violating this policy, you can help us by gently educating them about the importance of Leave No Trace and how they may help with our efforts. If there is a problem with another participant, port-o-potty, or other issues that you witness, let Umbrella HQ know.
        </p>
        <h3>Bathrooms</h3>
        <p>
        WE SHARE THEM! This means being respectful of the space we share together including where we do our dirty business. Do not go to the bathroom anywhere other than the porta-potties. If the state of the bathrooms are unacceptable, please alert Umbrella HQ. Pick up your trash and any loose toilet paper on the ground and dispose of it properly. It takes all of us to have respect for the land and respect for one another.
        </p>
        <h3>Consent, Confidentiality, and Cultivating a Safe Space</h3>
        <h4>Safe Space</h4>
        <p>
        We all have the right to a good time, but not at the expense of others.
        AUF wants to create an experience in which every person can feel confident that they will not be exposed to discrimination, criticism, harassment, or any other emotional or physical harm. We think this is crucial to ensuring a FUN and SAFE experience for ALL our friends.
        Your AUF family will do its abSOULute best to ensure this, but a safe space can't be 100% guaranteed without the help of our friends!
        Help us manifest an unforgettable Umbrella Weekend, where we can cultivate empathy and strengthen genuine human interconnectedness.
        Some suggestions to keep in mind:
        Physical and verbal assaults (ranging in severity) are all too common, impacting the individual and collective audience experience. We're asking everyone to think about their behavior at Umbrella Weekend and the lasting consequences it has on the people around them. Engage in the conversation, call in harmful behavior, report what you see and join us in demanding change.
        </p>
        <h4>Consent!</h4>
        <p>
        Consent is about asking/offering permission to someone for something.<br/>
        If it's not a (FUCK) YES then it's a no. (yes = yes, everything else is basically no so get clarification!)<br/>
        Remember that people cannot provide true consent if they do not feel safe to say no, so look for the YES.<br/>
        And if you do get a no, you should always respect when someone else says no.<br/>
        This is a sure way to make sure that we are all vibin' together.<br/>
        What you may find comfortable, they might find harmful. Ask if your friends would like to get spanked, misted, engaged in a topic, or ya know, touched. Get on the same page! Wouldn't it feel better to engage with someone who would enjoy it? Asking for permission and honoring people's boundaries is super sexy.
        </p>
        <h4>Confidentiality!</h4>
        <p>
        Umbrella Weekend is a magical place where magical things of all sorts can happen, such as connecting with others (even yourself in intimate ways). To ensure this is a safe space, we ask you to consider the information shared with you sacred and safe. When friends share some sensitive magical info with you, make sure it's okay before sharing their story with others.
        </p>
       </Col>
       <StaticImage
          src="../images/necklaces.jpeg"
          quality={99}
          formats={["auto", "webp",]}
          alt="headphones"
        />
      </Row>
    </Container>
    </div>
  </Layout>
)

export default Experience
