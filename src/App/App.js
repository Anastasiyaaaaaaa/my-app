import React from 'react';
import Block from "./Components/Block/Block.";
import './App.css'


class App extends React.Component {

    render() {
        return (
            <div className="App"> 
                <Block data = {this.props.data} />
            </div>
        );
    }
}

export default App;