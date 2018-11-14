import React from "react";
import "./Transaction.css";

import Tabs from "../common/Tabs/Tabs";
import Tab from "../common/Tabs/Tab";

class Transaction extends React.Component {
    render() {
        const tabs_list = [
            {
                key: 'stepOne',
                title: 'Transaction Info',
                subtitle: 'Step 1'
            },
            {
                key: 'stepTwo',
                title: 'Recipient info',
                subtitle: 'Step 2'
            },
            {
                key: 'stepThree',
                title: 'Make payment',
                subtitle: 'Step 3'
            }
        ];
        return(
            <div className="wrapper">
                <Tabs items={tabs_list}/>
                    <Tab id="stepOne">
                        <h3>Let’s set up your transaction!</h3>
                        <h4>Specify the amount to be sent or received.</h4>
                        <button type="button" className="button-next">Next</button>
                    </Tab>
            </div>
        );
    }
}

export default Transaction;