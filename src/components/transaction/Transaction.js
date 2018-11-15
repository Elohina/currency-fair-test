import React from "react";
import "./Transaction.css";
import EUR_IMG from "../../assets/EUR.png";

import Tabs from "../common/Tabs/Tabs";
import Tab from "../common/Tabs/Tab";
import Amount from "./Amount";
class Transaction extends React.Component {
    render() {
        const tabs_list = [
            {
                key: 'stepOne',
                title: 'Transaction Info',
                subtitle: 'Step 1',
            },
            {
                key: 'stepTwo',
                title: 'Recipient info',
                subtitle: 'Step 2',
                disabled: true
            },
            {
                key: 'stepThree',
                title: 'Make payment',
                subtitle: 'Step 3',
                disabled: true
            }
        ];
        const amount = 2000.00;
        const currency = {name: 'EUR', img: EUR_IMG};
        return(
            <Tabs items={tabs_list} >
                <Tab id="stepOne">
                    <h3>Let’s set up your transaction!</h3>
                    <h4>Specify the amount to be sent or received.</h4>
                    <Amount title="YOU SEND" amount={amount} currency={currency}/>
                    <Amount title="RECEIVER GETS" amount={amount} currency={currency}/>
                    <div className="next-container">
                        <button type="button" className="button-next">Next</button>
                    </div>
                </Tab>
            </Tabs>
        );
    }
}

export default Transaction;