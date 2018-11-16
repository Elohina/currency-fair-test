import React from "react";

class ModalHeader extends React.Component {
    render() {
        return(
            <div className="modal-header">{this.props.children}</div>
        );
    }
}

export default ModalHeader;