import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>Infinity.</div>
        <nav>
          <ul>
            <li className='discover'>
              <a href='/game'>discover</a>
            </li>
            <li className='planets'>
              <a href='/planets'>Planets</a>
            </li>
            <li className='nasa'>
              <a href='/news'>Latest from NASA</a>
            </li>
            <li>
              <a href='/message'>Send message</a>
              {/* <Link to="/message">Message</Link> */}
            </li>
            <li className='btn'>
              <a href='/'>Log In</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}