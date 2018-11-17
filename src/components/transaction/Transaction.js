import React from "react";
import "./Transaction.css";
import PADLOCK from "../../assets/images/padlock.png"
import CIRCLE_ARROW from "../../assets/images/circle_arrow.png"
import PHONE from "../../assets/images/phone.png"

import Tabs from "../Common/Tabs/Tabs";
import Tab from "../Common/Tabs/Tab";
import Amount from "./Amount";
import Modal from "../Common/Modal/Modal";
import ModalHeader from "../Common/Modal/ModalHeader";
import ModalBody from "../Common/Modal/ModalBody";
import ModalFooter from "../Common/Modal/ModalFooter";
import SplitCode from "../Common/SplitCode/SplitCode";
import Footer from "../Footer/Footer";

const CODE_DIGITS = 6;
class Transaction extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            transaction_data: this.props.transaction_data
        };
        this.onChangeSendInput = this.onChangeSendInput.bind(this);
        this.onChangeReceiveInput = this.onChangeReceiveInput.bind(this);
    }

    openVerificationCodeModal = () => {
        this.setState({ open: true });
    }

    onCloseModal = () => {
        this.setState({ open: false });
    };

    getVerificationCode(code) {
        this.setState({ verification_code: code});
    }

    onChangeSendInput(value) {
        const send = this.state.transaction_data.send;
        send.amount = value;
        this.setState({send});
        this.props.onChangeSendInput(value);
    }

    onChangeReceiveInput(value) {
        const receive = this.state.transaction_data.receive;
        receive.amount = value;
        this.setState({receive});
        this.props.onChangeReceiveInput(value);
    }

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
        const { open } = this.state;
        const { transaction_data } = this.props;
        return(
            <div>
            <Tabs items={tabs_list} >
                <Tab id="stepOne">
                    <h3>Let’s set up your transaction!</h3>
                    <h4>Specify the amount to be sent or received.</h4>
                    <Amount title="YOU SEND" amount={transaction_data.send.amount} currency={transaction_data.send.currency} onChange={this.onChangeSendInput}/>
                    <Amount title="RECEIVER GETS" amount={transaction_data.receive.amount} currency={transaction_data.receive.currency} onChange={this.onChangeReceiveInput}/>
                    <div className="next-container">
                        <button type="button" className="primary" onClick={this.openVerificationCodeModal}>Next</button>
                    </div>
                </Tab>
            </Tabs>
            <Footer/>
            <Modal open={open} onClose={this.onCloseModal}>
                <ModalHeader>
                    <h3 className="title">
                        <span><img src={PADLOCK} alt=""/></span>
                        Identity verification required
                    </h3>
                    <p className="subtitle">For your security, we ocassionally require you to verify your identity by entering a code sent to your mobile device.</p>
                </ModalHeader>
                <ModalBody>
                    <h4 className="title">Enter the code sent via SMS to <span className="phone-container">{transaction_data.user.phone.code}</span><span className="phone-container">{transaction_data.user.phone.number}</span></h4>
                    <SplitCode onChangeInput={this.getVerificationCode} digits_number={CODE_DIGITS} />
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