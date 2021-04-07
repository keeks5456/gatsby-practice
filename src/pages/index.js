import React from "react"
// gatsby preloads almost instant
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

const IndexPage = () => {
  return (
    <div>
      <Header />
    <div>Hallo From Index Page Component
      <p>need a dev? Contact meee here 
        {/* standard way of linking  */}
        {/* <a href="/contact">Contacts</a> */}
        </p>
        {/* Link has better UI, real time refresh */}
        <p>Nev a dev <Link to="/contact">Contact me.</Link></p>
        <Footer />
    </div>
    </div>
  )
}
export default IndexPage
