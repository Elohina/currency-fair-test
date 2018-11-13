import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    //TODO: Check if I can have useless constructor
    render() {
        return (
            <nav className="nav-wrap">{this.props.children}</nav>
        );
    }
}

export default Navbar;