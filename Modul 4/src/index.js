import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import MahasiswaPost from './container/Tugas/MahasiswaPost';
import * as serviceWorker from 'register-service-worker'
// import BlogPost from './container/BlogPost/BlogPost';


ReactDOM.render(
  <React.StrictMode>
    <MahasiswaPost />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
