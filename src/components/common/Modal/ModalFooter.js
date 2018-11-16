import React from "react";

class ModalFooter extends React.Component {

    constructor(props) {
        super(props)
        this.onClose = this.onClose.bind(this);
    }

    onClose() {
        this.props.onClose();
    }

    render() {
        return(
            <div className="modal-footer">{this.props.children}</div>
        );
    }
}

export default ModalFooter;