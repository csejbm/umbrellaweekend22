import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Container from 'react-bootstrap/Container';

import Layout from "../components/layout"
import Seo from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div style={{backgroundColor: 'white'}}>
    <Container>
    <StaticImage
      src="../images/UW-Teaser-Poster-Final.jpg"
      quality={99}
      formats={["auto", "webp",]}
      alt="Umbrella Weekend 2022 March 24-28, Anza California"
    />
    </Container>
    </div>
  </Layout>
)

export default IndexPage
