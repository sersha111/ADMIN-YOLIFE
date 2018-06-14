import * as React from 'react';
// import Tags from './../Tags/Tags'

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidenav">
          {/* <Link to="/">Home</Link> */}
         <a href="#Post">Posts</a>
         <a href="#Tags">Tags</a>
      </div>    
    );
  }
}

export default Sidebar;
