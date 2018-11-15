import React from "react";

function Amount(props) {
    return(
        <div className="amount-container">
            <div className="amount">
                <h4>{props.title}</h4>
                <input type="text" step="0.1" value={
                    new Intl.NumberFormat('en-GB', {
                        style: 'currency',
                        currency: props.currency.name
                    }).format(props.amount)
                } />
            </div>
            <div className="currency">
                <img src={props.currency.img} alt="" />
                <h2>{props.currency.name}</h2>
            </div>
        </div>
    );
}

export default Amount;