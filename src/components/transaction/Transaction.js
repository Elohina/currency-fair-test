import React from "react";

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
            <div className="wrapper transaction-steps">
                <Tabs items={tabs_list}/>
                {/* <Tab id="stepOne">
                    <h4 className="tab-step">Step 1</h4>
                    <h2 className="tab-title">Transaction Info</h2>
                </Tab>
                <Tab id="stepTwo"></Tab>
                    <h4 className="tab-step">Step 2</h4>
                    <h2 className="tab-title">Recipient info</h2>
                <Tab id="stepThree">
                    <h4 className="tab-step">Step 3</h4>
                    <h2 className="tab-step">Make payment</h2>
                </Tab> */}

            </div>
        );
    }
}

export default Transaction;