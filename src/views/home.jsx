import React from 'react'
import Topbar from '../components/topbar'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div>
  {/* Topbar Start */}
  <Topbar></Topbar>
  {/* Topbar End */}
  {/* Navbar Start */}
 <Navbar></Navbar>
  {/* Navbar End */}
    <Outlet></Outlet>
  {/* Footer Start */}
  <Footer></Footer>
  {/* Footer End */}
</div>

    </div>
  )
}

export default Home