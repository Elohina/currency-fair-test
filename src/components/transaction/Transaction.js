import React from "react";
import "./Transaction.css";
import EUR_IMG from "../../assets/EUR.png";
import PADLOCK from "../../assets/padlock.png"
import CIRCLE_ARROW from "../../assets/circle_arrow.png"
import PHONE from "../../assets/phone.png"

import Tabs from "../common/Tabs/Tabs";
import Tab from "../common/Tabs/Tab";
import Amount from "./Amount";
import Modal from "../common/Modal/Modal";
import ModalHeader from "../common/Modal/ModalHeader";
import ModalBody from "../common/Modal/ModalBody";
import ModalFooter from "../common/Modal/ModalFooter";
class Transaction extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    openVerificationCodeModal = () => {
        this.setState({ open: true });
    }

    onCloseModal = () => {
        this.setState({ open: false });
    };


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
        const {open} = this.state;
        return(
            <div>
            <Tabs items={tabs_list} >
                <Tab id="stepOne">
                    <h3>Let’s set up your transaction!</h3>
                    <h4>Specify the amount to be sent or received.</h4>
                    <Amount title="YOU SEND" amount={amount} currency={currency}/>
                    <Amount title="RECEIVER GETS" amount={amount} currency={currency}/>
                    <div className="next-container">
                        <button type="button" className="primary"
                                onClick={this.openVerificationCodeModal}>Next</button>
                    </div>
                </Tab>
            </Tabs>
            <Modal open={open} onClose={this.onCloseModal}>
                <ModalHeader>
                    <h3 className="title">
                        <span><img src={PADLOCK} alt=""/></span>
                        Identity verification required
                    </h3>
                    <p className="subtitle">For your security, we ocassionally require you to verify your identity by entering a code sent to your mobile device.</p>
                </ModalHeader>
                <ModalBody>
                    <h4 className="title">Enter the code sent via SMS to</h4>
                    <div className="wrapper-flex space-between">
                        <div>
                            <img src={CIRCLE_ARROW} alt="" />
                            <a href="/">Receive a new code</a>
                        </div>
                        <div>
                            <img src={PHONE} alt="" />
                            <a href="/">Receive code via call instead</a>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <div className="wrapper-flex space-between padding-top-md padding-bottom-md">
                        <div>
                            <button className="primary margin-right-md">Verify Identity</button>
                            <button className="secondary" onClick={this.onCloseModal}>Back</button>
                        </div>
                        <div className="padding-top-sm">
                            <a href="/">I can’t access this mobile device</a>
                        </div>
                    </div>
                </ModalFooter>
            </Modal>
            </div>
        );
    }
}

export default Transaction;