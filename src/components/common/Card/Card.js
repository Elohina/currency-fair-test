import React from "react";
import "./Card.css";

import CardBody from "./CardBody";
class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="card-container">
                {this.props.children}
            </div>
        );
    }
}

export default Card;