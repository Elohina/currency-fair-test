import React from "react";
import "./Modal.css";

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.open
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (!state.show && props.open) {
            return ({show: true});
        }
        if (!props.open && state.show) {
            return ({show: false})
        }
        return null;
    }

    render() {
        const {show} = this.state;
        if(!show) {return null;}

        return(
            <div>
                <div className="overlay"></div>
                <div className="modal">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Modal;