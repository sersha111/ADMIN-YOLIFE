import * as React from 'react';
let data = require ('./../../data/db.json');

interface TagsTypes {
  id: any;
  name: string;
}

class Tags extends React.Component {
  render() {
    // let tagArray = ['Еда', 'Путешествие', 'Спорт'];
    // console.log(data.tags[1].id, data.tags[1].name, data.tags[2]);
    
    return (
      <div className="listOfNames"> 
        {data.tags.map(({id, name}: TagsTypes ) => 
          <div className="names" key={id}> <a href={`tag=${id}`}>{name}</a> </div>)}        
      </div>   
    );
  }
}

export default Tags;
