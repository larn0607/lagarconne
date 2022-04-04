import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/index.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { BrowserRouter }  from 'react-router-dom'
import { store } from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById('root')
);