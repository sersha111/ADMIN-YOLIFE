import * as React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <a href="/"> Home </a>|
        <a href="#Content"> Content </a>|
        <a href="#Media"> Media </a>
      </div>
    )
  }
}
export default Header
