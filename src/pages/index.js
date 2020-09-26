import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div>
      <Navbar />
      Hello People!
      <div>
        <Link to="/blog">blog page</Link>
      </div>
      <div>
        <Link to="https://www.gatsbyjs.org">gatsby docs</Link>
      </div>
      <Footer />
    </div>
  )
}
