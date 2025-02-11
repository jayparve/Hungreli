  import React from 'react'
  import Navbar from './components/Navbar'
  import Hero from './components/Hero'
  import ComingSoon from './components/ComingSoon'
  import RestaurantCTA from './components/RestaurantsCTA'
  import Footer from './components/Footer'
  // import Phoneimg from './components/Phone'

  function App() {

    return (
      <>
        <Navbar/>
        <Hero/>
        {/* <Phoneimg/> */}
        <ComingSoon/>
        <RestaurantCTA/>  
        <Footer/>
      </>
    )
  }

  export default App
