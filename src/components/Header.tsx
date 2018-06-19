import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to="/"> Home </Link>|
        {/* <a href="#Content"> Content </a>|
        <a href="#Media"> Media </a> */}
      </header>
    )
  }
}
export default Header
