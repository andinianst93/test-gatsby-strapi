import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import { GatsbyContext } from "../context/context"
const Layout = ({ children }) => {
  const { isSidebarOpen } = React.useContext(GatsbyContext)

  return (
    <>
      <Navbar /> {isSidebarOpen && <Sidebar />}
      {children}
      <Footer />
    </>
  )
}

export default Layout
