import React from "react";

class Tab extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={this.props.id} className="tab-content">
                {this.props.children}
            </div>
        )
    }
}

export default Tab;