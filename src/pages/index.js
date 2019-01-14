import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layouts/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Title</h1>
    <p>Welcome to your new Gatsby site.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/">HOME</Link>
  </Layout>
)

export default IndexPage
