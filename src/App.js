import React from 'react'
// import Article from './Components/Article/Article'          // this is how we usually import the components //we can also import our components from export it from other file 

import {Blog, Features, Footer, Header, Possibility, WhatGPT3, } from "./Containers_Cmptns";     // we can import this by making a index.js file inside Containers_Cmptns and from there we import this
import { CallToAction, Brand, Navbar } from "./Components"                                      // we can import this by making a index.js file inside Containers_Cmptns and from there we import this
import "./App.css"


const App = () => {
  return (
    <div className='App'>
      {/* <Article/> */}                          {/*this is how we usually import the components */}
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>      
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CallToAction/>
      <Blog/>
      <Footer/>
      
    </div>
  )
}

export default App
