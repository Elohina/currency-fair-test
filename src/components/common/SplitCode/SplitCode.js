import React from "react";

import "./SplitCode.css"

class SplitCode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            split_code: Array(this.props.digits_number)
        }
    }

    onChangeDigit(e, i) {
        const new_split_code = this.state.split_code;
        new_split_code[i] = e.currentTarget.value;
        this.setState(
            {
                split_code: new_split_code
            }
        );
        const complete_code = this.state.split_code.join('');
        this.props.onChangeInput(complete_code);
    }

    render() {
        const {digits_number} = this.props;
        return(
            <div className="split-code-container wrapper-flex space-between padding-bottom-sm">
                {Array.from(Array(digits_number).keys()).map((digit) => {
                    return(
                        <input key={digit} id={`code-${digit}`} maxLength={1} type="text" className="split-digit" onChange={(e)=>{this.onChangeDigit(e, digit)}}/>
                    );
                })}
            </div>
        );
    }
}

export default SplitCode;