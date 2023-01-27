import React, { useState } from 'react'
import "./Navbar.css"
// import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import logo from "../../Assets/logo.svg"

const Menu_Links = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (

    <>
      <div className='gpt3__navbar'>
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="gpt3__navbar-links_container">
            {/* <p><a href="/home">Home</a></p>
            <p><a href="/wgpt3">What is GPT?</a></p>
            <p><a href="/possibility">Open AI</a></p>
            <p><a href="/features">Case Studies</a></p>
            <p><a href="/blog">Library</a></p> */}
            <Menu_Links />              {/*instead of writting all links we can put that links in a function component and easliy use that anywhere */}
          </div>
        </div>

        <div className="gpt3__navbar-sign">
          <p>Sign In</p>
          <button type='button'> Sign Up</button>
        </div>

        <div className="gpt3__navbar-menu">
          {/* {
            toggleMenu ?
              <RiCloseLine color="white" size={25} onClick={() => setToggleMenu(false)} />
              : <RiMenu3Line color="white" size={25} onClick={() => setToggleMenu(true)} />
          } */}
          {
            toggleMenu && (
              <div className="gpt3__navbar-menu_container scale-up-center">
                <div className="gpt3__navbar-menu_container-links">
                  <Menu_Links />     {/*this was from the component which we made for links  we can use it anywhere */}

                  <div className="gpt3__navbar-menu_container-links-sign">
                    <p>Sign In</p>
                    <button type='button'> Sign Up</button>
                  </div>

                </div>
              </div>
            )
          }
        </div>

      </div>

    </>

  )
}

export default Navbar
