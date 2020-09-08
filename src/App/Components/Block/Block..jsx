import React from 'react';
import Products from './Products/Products';
import Header from './Header/Header';
import './Block.css'

class Block extends React.Component {

    render() {
        return (
            <div className="Block">
                <Header Headerdata = {this.props.data.Header}/>
                <Products Productsdata = {this.props.data.Products} />
            </div>
        );
    }
}

export default Block;