import * as React from 'react';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';

// import { BrowserRouter } from 'react-router-dom';
// import Tags from './components/Tags/Tags';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import { Button } from 'antd';
// import { addPosts } from './reducers/reducers';

// const store = createStore(addPosts);

class App extends React.Component<{}, {}> {
  render() {
    return (
      // <Provider store={store}>
      <div className="wrapper">
          <Header/>
          <Navigation/>        
      </div>
      
    );
  }
}

export default App;
