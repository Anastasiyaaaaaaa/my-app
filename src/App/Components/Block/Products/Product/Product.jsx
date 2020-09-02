import React from 'react';
import './Product.scss'

class Product extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ProductState: "Default",
            footer_info: this.props.footer_info_default,
            top_info: this.props.top_info_default,
            default_bottom: "DefaultButton"
        };

        /*если продукта нет в наличии*/
        if (this.props.stocked === "no") {
            this.state.ProductState = "Disable";
            this.state.top_info = this.props.top_info_default;
            this.state.footer_info = this.props.footer_info_disable;
            this.state.default_bottom = "NotDefaultButton"

        }

    }

    handleClick = () => {

        if (this.state.ProductState !== "Disable") {
            if (this.state.ProductState === "Selected") {

                this.setState({
                    ProductState: "Default",
                    footer_info: this.props.footer_info_default,
                    top_info: this.props.top_info_default,
                    default_bottom: "DefaultButton"
                });

            }


            else if (this.state.ProductState === "Default") {

                this.setState({
                    ProductState: "Selected",
                    footer_info: this.props.footer_info_selected,
                    top_info: this.props.top_info_default,
                    default_bottom: "NotDefaultButton"
                });

            }
        }
    }

    ProductOnMouseOut = () => {
        if (this.state.ProductState === "Selected") {
            this.setState({
                top_info: this.props.top_info_default
            });


        }
    }

    ProductOnMouseOver = () => {
        if (this.state.ProductState === "Selected") {
            this.setState({
                top_info: this.props.top_info_selected_hover
            });
        }
    }

    render() {

        return (
            <div className="Product" >
                <div className={this.state.ProductState}
                    onClick={this.handleClick}
                    onMouseOut={this.ProductOnMouseOut}
                    onMouseOver={this.ProductOnMouseOver} >


                    <div className="top_info"> {this.state.top_info} </div>
                    <div className="name"> {this.props.name} </div>
                    <div className="taste"> {this.props.taste} </div>
                    <div className="middle_info">
                        <div className="quantity"> {this.props.quantity} </div>
                        <div className="present"> {this.props.present} </div>
                         <div className="dop_info"> {this.props.dop_info} </div>
                    </div>
                    <img className="img" src={this.props.img} />
                     
                    <div className="weight">
                        <div className="weight_value"> {this.props.weight_value} </div>
                        <div className="weight_measure"> {this.props.weight_measure} </div>
                    </div>



                </div>
                <div className="ProductFooter"> {this.state.footer_info}
                    <button className={this.state.default_bottom} onClick={this.handleClick}>купи.</button>
                </div>
            </div>

        );
    }
}

export default Product;