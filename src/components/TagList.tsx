import React, { Fragment } from 'react'
let data = require('./../data/db.json')

interface TagsTypes {
  id: any
  name: string
}

class TagList extends React.Component {
  render() {
    // let tagArray = ['Еда', 'Путешествие', 'Спорт'];
    // console.log(data.tags[1].id, data.tags[1].name, data.tags[2]);

    return (
      <Fragment>
        {data.tags.map(({ id, name }: TagsTypes) => (
          <div className="names" key={id}>
            <a href={`tag/${id}`}>{name}</a>{' '}
          </div>
        ))}
      </Fragment>
    )
  }
}

export default TagList
