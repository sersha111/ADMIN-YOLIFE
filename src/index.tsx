import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
// import RootReducer from './reducers';

// import 'resources/main.less';

// const store = createStore(RootReducer);

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
