import * as React from 'react'
import Sidebar from './Sidebar'
import Posts from './Posts'
import Tags from './Tags'
import { Route } from 'react-router-dom'

class HomePage extends React.Component {
  render() {
    return (
      <div className="homePage">
        <Sidebar />
        <div className="main">
          <Route path="/tags" component={Tags} />
          <Route path="/posts" component={Posts} />
        </div>
      </div>
    )
  }
}

export default HomePage
