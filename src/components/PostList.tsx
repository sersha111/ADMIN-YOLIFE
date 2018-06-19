import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
let data = require('./../data/db.json')

class PostList extends React.Component {
  render() {
    return (
      <Fragment>
        {/* {data.posts.map(({id, name}: {id: any, name: string}) => <li key={id}> 
        <a href={`post=${id}`}>{name}</a>  </li>)}       */}
        {data.posts.map(({ id, name }: { id: any; name: string }) => (
          <div key={id}>
            <Link to={`/post/${id}`}>{name}</Link>
          </div>
        ))}
      </Fragment>
    )
  }
}
export default PostList

// fetch('./../../data/data.json')
// .then((res) => res.json())
// .then((data) => {
//   console.log('data:', data);
// })
// .catch( alert );
