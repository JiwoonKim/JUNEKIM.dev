import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layouts/layout'
//import Image from '../components/image'

const AboutPage = () => (
  <Layout title={"About Me"} metaDataType='all'>
    
    <article className="post">
      <section className="post-content">

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        {/* <Image /> */}
      </div>

      <p>
        junebug0501@gmail.com
      </p>

      <h3>Projects</h3>

      </section>
    </article>
  </Layout>
)

export default AboutPage