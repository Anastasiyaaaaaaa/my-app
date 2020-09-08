import React from 'react';
import './StaticContent.scss'


function StaticContent(props) {
    return (
        <div className="StaticContent">

            <div className="TextContent">

                <div className="name"> {props.name} </div>
                <div className="taste"> {props.taste} </div>
                <div className="middle_info">
                    <div className="quantity"> {props.quantity} </div>
                    <div className="present"> {props.present} </div>
                    <div className="dop_info"> {props.dop_info} </div>
                </div>
            </div>

            <div className="ImgContent">
                <img className="img" alt="cat foto" src={props.img} />
            </div>

            <div className="weight">
                <div className="weightContainer">
                    <div className="weight_value"> {props.weight_value} </div>
                <div className="weight_measure"> {props.weight_measure} </div>
                </div>
                
            </div>



        </div>
    );
}

export default StaticContent;