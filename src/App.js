import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import ColorList from './components/color-list/color-list.component';
import AddColor from './components/add-color/add-color.component';

class App extends Component {


  render() {

    return (
        <div className="container">
            <div className="jumbotron">
                <p style={{fontSize:'80px',color:'#ffffff'}}><strong>COLOR PICKER |</strong></p>
                <p style={{fontSize:'30px',color:'#ffffff'}}><strong>Color Picker is sample application to organize your
                    <span style={{color:'#b6002e'}}> COLORS</span></strong></p>
            </div>
            <div className="container">
                <div className="App">
                    <div className="App-content">
                        <AddColor />
                    </div>
                    <div className="App-content top" >
                        <div style={{border: '4px solid #bfe4f6',boxShadow:'10px 10px 5px #f39e01'}}>
                            <ColorList />
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbar navbar-default navbar-fixed-bottom top" >
                <div className="container">
                    <p className="navbar-text pull-left">© 2018 - Site Built By Eric Mugisha Nzivugira
                        <a href="https://github.com/emugisha/react-color-organizer" target="_blank" >  Github repo</a>
                    </p>

                    <a href="https://www.linkedin.com/in/eric-mugisha-nzivugira-7453025b" className="navbar-btn btn-primary btn pull-right">
                        <span className="glyphicon glyphicon-star"></span> Connect on Linkedin</a>
                </div>

            </div>


        </div>


    );
  }
}

export default connect(null,null)(App);
