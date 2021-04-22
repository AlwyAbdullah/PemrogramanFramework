import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './praktikum-10/routes';
import Header from './praktikum-10/header';
import './praktikum-10/style.css';
import firebase from 'firebase';
import firebaseconfig from './praktikum-10/firebase.config';

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// import BlogPost from './container/BlogPost/BlogPost';
// import MahasiswaPost from './container/Tugas/MahasiswaPost';

// ReactDOM.render(
//   <React.StrictMode>
//     <MahasiswaPost />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// Praktikum 10
firebase.initializeApp(firebaseconfig);
export const AuthContext = React.createContext(null);

function App() {
    const[isLoggedIn, setLoggedIn] = useState(false);

    return (
      <AuthContext.Provider value={{isLoggedIn, setLoggedIn}}>
        Is Logged in? {JSON.stringify(isLoggedIn)}
        <div className="App">
          <Router>
            <Header />

            <Switch>
              {routes.map(route => (
                <Route 
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </Switch>
          </Router>
        </div>
      </AuthContext.Provider>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
