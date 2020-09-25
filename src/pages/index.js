import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      Hello People!
      <div>
        <Link to="/blog">blog page</Link>
      </div>
      <div>
        <Link to="https://www.gatsbyjs.org">gatsby docs</Link>
      </div>
    </div>
  )
}
