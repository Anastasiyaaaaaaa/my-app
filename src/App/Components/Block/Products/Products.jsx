import React from 'react';
import Product from './Product/Product';
import './Products.scss'

class Products extends React.Component {

    render() {
        let ProductsElements = this.props.data.map(product =>
            <Product
                key={product.id}
                top_info_default={product.top_info_default}
                top_info_selected_hover={product.top_info_selected_hover}
                name={product.name}
                taste={product.taste}
                img={product.img}
                quantity={product.quantity}
                present={product.present}
                dop_info={product.dop_info}
                weight_value={product.weight_value}
                weight_measure={product.weight_measure}
                footer_info_disable={product.footer_info_disable}
                footer_info_default={product.footer_info_default}
                footer_info_selected={product.footer_info_selected}
                stocked={product.stocked}
            />
        );

        return (
            <div className="Products">
                {ProductsElements}
            </div>
        );
    }
}

export default Products;