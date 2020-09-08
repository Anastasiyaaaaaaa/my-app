import React from "react";

import "./Product.scss";
import StaticContent from "./StaticContent/StaticContent";

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ProductState: "Default",
      top_info: this.props.top_info_default,
      top_info_class: "top_info_default",
      footer_info: this.props.footer_info_default,
      default_bottom: "DefaultButton",
    };

    /*если продукта нет в наличии*/
    if (this.props.stocked === "no") {
      this.state.ProductState = "Disable";
      this.state.top_info = this.props.top_info_default;
      this.top_info_class = "top_info_default";
      this.state.footer_info = this.props.footer_info_disable;
      this.state.default_bottom = "NotDefaultButton";
    }
  }

  handleClick = () => {
    let DefaultState = "Default";
    let SelectedState = "Selected";
    let DisableState = "Disable";

    if (this.state.ProductState !== DisableState) {
      /* если нажали на выбранный продукт */
      this.state.ProductState === SelectedState
        ? this.setState({
            ProductState: DefaultState,
            footer_info: this.props.footer_info_default,
            top_info: this.props.top_info_default,
            default_bottom: "DefaultButton",
            top_info_class: "top_info_default",
          })
        : /* если нажали на не выбранный продукт */
          this.setState({
            ProductState: SelectedState,
            footer_info: this.props.footer_info_selected,
            top_info: this.props.top_info_default,
            default_bottom: "NotDefaultButton",
            top_info_class: "top_info_default",
          });
    }
  };

  /* мышка ушла с продукта */
  ProductOnMouseLeave = () => {
    if (this.state.ProductState === "Selected") {
      this.setState({
        top_info: this.props.top_info_default,
        top_info_class: "top_info_default",
      });
    }
  };

  /* мышка на продукте */
  ProductOnMouseEnter = () => {
    if (this.state.ProductState === "Selected") {
      this.setState({
        top_info: this.props.top_info_selected_hover,
        top_info_class: "top_info_selected_hover",
      });
    }
  };

  render() {
    return (
      <div className="Product">
        <div
          className={this.state.ProductState}
          onClick={this.handleClick}
          onMouseLeave={this.ProductOnMouseLeave}
          onMouseEnter={this.ProductOnMouseEnter}
        >
          <div className="BorderProductContent">
            <div className="ProductContent">

              <div className="top_info">
                <div className={this.state.top_info_class}>
                  {this.state.top_info}
                </div>
              </div>

              <StaticContent
                name={this.props.name}
                taste={this.props.taste}
                quantity={this.props.quantity}
                present={this.props.present}
                dop_info={this.props.dop_info}
                img={this.props.img}
                weight_value={this.props.weight_value}
                weight_measure={this.props.weight_measure}
              />
            </div>
          </div>

          <div className="ProductFooter"> 
            {this.state.footer_info}
            <button
              className={this.state.default_bottom}
              onClick={this.handleClick}
            >
              купи.
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
