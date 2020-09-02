import React from 'react';
import Products from './Products/Products';
import './Block.css'

class Block extends React.Component {

    render() {
        return (
            <div className="Block">
                <div className="Header">заголовок</div>
                <Products data = {this.props.data} />
            </div>
        );
    }
}

export default Block;