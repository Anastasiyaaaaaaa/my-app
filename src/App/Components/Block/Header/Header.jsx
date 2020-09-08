import React from 'react';
import './Header.scss'

class Header extends React.Component {

    render() {
        return (
            <div className="Header">
                {this.props.Headerdata}
            </div>
        );
    }
}

export default Header;