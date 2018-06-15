import * as React from 'react'
// import Tags from './../Tags/Tags'

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidenav">
        <a href="/posts">Posts</a>
        <a href="/tags">Tags</a>
      </div>
    )
  }
}

export default Sidebar
