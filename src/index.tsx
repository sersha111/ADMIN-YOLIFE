import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AppLayout from './components/AppLayout'
// import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker'
import './index.css'
// import RootReducer from './reducers';

// import 'resources/main.less';

// const store = createStore(RootReducer);

ReactDOM.render(
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement,
)
registerServiceWorker()
