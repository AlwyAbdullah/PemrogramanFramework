import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import List from './List';
import { Component } from 'react';

class App extends Component {
  render(){
    return(
      <div>
        <h1>Component dari Class App</h1>
        <List />
        <Footer judul='Halaman Footer' nama='Aufa'/>
      </div>
    )
  }
}

export default App;
