import React, {Component} from 'react';
import './home.css';
import AddColor from '../add-color/add-color.component';
import ColorList from '../color-list/color-list.component';
import {v4} from 'uuid';
class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            savedColors:[]
        }
        this.setRating = this.setRating.bind(this);
        this.addColor = this.addColor.bind(this);
        this.removeColor = this.removeColor.bind(this);
    }

    setRating(colorId,rating){
        let myColors = this.state.savedColors;
        let ratedColor =  myColors.find(color=>color.id === colorId);
        if(ratedColor) {
            ratedColor.rating = rating;
        }
        this.setState({savedColors:myColors});
    }
    addColor(title,color){
        const savedColors = [...this.state.savedColors,{id:v4(),title,color,rating:0}];
        this.setState({savedColors});
    }

    removeColor(colorId){
        let savedColors = this.state.savedColors.filter(color=>color.id !== colorId);
        this.setState({savedColors});
    }

    render() {
        let {savedColors} = this.state;
        const{addColor,setRating,removeColor} = this;
        return (
            <div className="container">
                <div className="App">
                    {/*<header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>*/}
                    <div className="App-content">
                        <AddColor onNewColor={addColor} />
                    </div>
                    <div className="App-content">
                        <div style={{border: '4px solid #bfe4f6',boxShadow:'10px 10px 5px #f39e01'}}>
                            <ColorList savedColors={savedColors} onRate={setRating} onRemove={removeColor} />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Home;