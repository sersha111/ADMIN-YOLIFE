import * as React from 'react'
let data = require('./../../data/db.json')

class Posts extends React.Component {
  render() {
    return (
      <div className="listOfNames">
        {/* {data.posts.map(({id, name}: {id: any, name: string}) => <li key={id}> 
        <a href={`post=${id}`}>{name}</a>  </li>)}       */}
        {data.posts.map(({ id, name }: { id: any; name: string }) => (
          <div className="names" key={id}>
            <a href={`post/${id}`}>{name}</a>
          </div>
        ))}
      </div>
    )
  }
}
export default Posts

// fetch('./../../data/data.json')
// .then((res) => res.json())
// .then((data) => {
//   console.log('data:', data);
// })
// .catch( alert );
