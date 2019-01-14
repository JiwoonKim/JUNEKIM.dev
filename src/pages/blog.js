import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layouts/layout'
import SEO from '../components/seo'

const PostListPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>blog title</h1>
        <p>post list</p>
        <Link to="/postlist">Post List</Link>
    </Layout>
)

export default PostListPage
