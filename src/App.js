import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/home.component'
class App extends Component {


  render() {

    return (
        <div className="container">
            <div className="jumbotron">
                <p style={{fontSize:'80px',color:'#ffffff'}}><strong>COLOR PICKER |</strong></p>
                <p style={{fontSize:'30px',color:'#ffffff'}}><strong>Color Picker is sample application to organize your
                    <span style={{color:'#b6002e'}}> COLORS</span></strong></p>
            </div>
            <Home/>
        </div>

    );
  }
}

export default App;
