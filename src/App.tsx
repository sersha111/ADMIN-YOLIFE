import * as React from 'react'
import { Route } from 'react-router-dom'
import Header from './components/Header/Header'
import EditPostPage from './components/EditPostPage/EditPostPage'
import HomePage from './components/HomePage/HomePage'

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
        <Header />
        <Route path="/" component={HomePage} />
        <Route path="/post/:id" component={EditPostPage} />
        <Route path="/tag/:id" component={EditPostPage} />
      </div>
    )
  }
}

export default App
