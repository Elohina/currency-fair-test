import React from "react";

class Amount extends React.Component {

    constructor(props) {
        super(props);
        this.state = { props }
    }

    onChangeIput(event) {
        this.setState({amount: event.currentTarget.valueAsNumber});
        this.props.onChange(event.currentTarget.valueAsNumber);
    }

    render() {
        const { title, amount, currency } = this.props;
        return(
            <div className="amount-container">
                <div className="amount">
                    <h4>{title}</h4>
                    <div className="wrapper-flex" >
                        <input type="text" value={currency.symbol} readOnly className="amount-currency" />
                        <input type="number" step="0.1" onChange={(e)=>{this.onChangeIput(e)}} value={amount} />
                    </div>
                </div>
                <div className="currency">
                    <img src={currency.img} alt="" />
                    <h3 className="margin-left-sm">{currency.name}</h3>
                </div>
            </div>
        );
    }
}

export default Amount;