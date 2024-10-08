import React from 'react'
import Nav from '../Navigation/Nav'
import Header from '../Header/Header'
import Newarrival from '../Service/Newarrival/Newarrival'
import Blog from '../Service/Blog/Blog'
import Footer from '../Service/Footer/Footer'
import "./Home.css"

const Home = () => {
  return (
    <div className='homepage'>
        <Nav/>
        <Header/>
        <Newarrival/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default Home