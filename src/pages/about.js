import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layouts/layout'
//import Image from '../components/image'

const AboutPage = () => (
  <Layout>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      
      {/* <Image /> */}
  
    </div>
    <h1>JIWOON KIM</h1>
    <p>senior student</p>
    <p>junebug0501@gmail.com</p>
    <Link to="/">HOME</Link>
  </Layout>
)

export default AboutPage

