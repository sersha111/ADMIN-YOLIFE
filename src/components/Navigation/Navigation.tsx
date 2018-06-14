import * as React from 'react';
import Sidebar from './../Sidebar/Sidebar';
import Posts from './../Posts/Posts';
import Tags from './../Tags/Tags';
// import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <Sidebar/>
        <div className="main">
            <Posts/>
            <Tags/>                   
        </div>
     </div>
    );
  }
}

export default Navigation;
