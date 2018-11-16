import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="nav-wrap">{this.props.children}</nav>
        );
    }
}

export default Navbar;