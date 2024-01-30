import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Error from "../Images/error.png"
import TopSection from '../Components/TopSection'

export default function PageNotFound() {
  return (
    <>
    <Header/>
    {/* <section>
      <div className="container text-center">
        <img src={Error} alt="" height={500} />
      <div>Page Not Found</div>
      </div>
    </section> */}
    <TopSection title={"Page Not Found"} image={Error} height={'655px'} />
    <Footer/>
    </>
  )
}

