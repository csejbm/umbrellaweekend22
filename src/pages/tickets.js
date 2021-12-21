import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Tickets = () => (
  <Layout>
    <Seo title="Tickets" />
    <h1>Tickets Coming Soon!</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Tickets
