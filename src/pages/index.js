import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <div>
        Hello People!
        <div>
          <Link to="/blog">blog page</Link>
        </div>
        <div>
          <Link to="https://www.gatsbyjs.org">gatsby docs</Link>
        </div>
      </div>
    </Layout>
  )
}
