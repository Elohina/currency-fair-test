import React from "react";
import "./TransactionDetail.css";

import Card from "../Common/Card/Card";
import CardHeader from "../Common/Card/CardHeader";
import CardFooter from "../Common/Card/CardFooter";
import CardBody from "../Common/Card/CardBody";

import QUESTION_MARK from "../../assets/images/question_mark.png"
class TransactionDetail extends React.Component {

    render() {
        const { transaction_data } = this.props;
        return(
            <div className="detail-container">
                <Card>
                    <CardHeader>
                        <h4>Sending Details</h4>
                    </CardHeader>
                    <CardBody>
                        <div className="transaction-details wrapper-flex space-between">
                            <h4>You send</h4>
                            <p className="highlight">{new Intl.NumberFormat('en-GB', {
                                maximumSignificantDigits: 2,
                                currency: transaction_data.send.currency.name,
                                style: 'currency'
                            }).format(transaction_data.send.amount)}</p>
                        </div>
                    </CardBody>
                    <CardHeader>
                        <div className="wrapper-flex space-between">
                            <h4>Receiving Details</h4>
                            <div className="question wrapper-flex space-between">
                                <a href="/">As of right now</a>
                                <img src={QUESTION_MARK} alt="" />
                            </div>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <div className="transaction-details wrapper-flex space-between">
                            <h4>Rate</h4>
                            <p>{new Intl.NumberFormat('en-GB', {
                                maximumSignificantDigits: 5
                            }).format(transaction_data.rate)}</p>
                        </div>
                        <div className="transaction-details wrapper-flex space-between">
                            <h4>Fee</h4>
                            <p>{new Intl.NumberFormat('en-GB', {
                                currency: transaction_data.receive.currency.name,
                                style: 'currency'
                            }).format(transaction_data.fee)}</p>
                        </div>
                        <div className="transaction-details wrapper-flex space-between">
                            <h4>Delivery date</h4>
                            <p>
                            {new Intl.DateTimeFormat('en-GB', {
                                month: 'long', day: 'numeric'
                            }).format(new Date(transaction_data.delivery_date))}
                            </p>
                        </div>
                        <div className="transaction-details wrapper-flex space-between">
                            <h4>Recipient gets</h4>
                            <p className="highlight">{new Intl.NumberFormat('en-GB', {
                                currency: transaction_data.send.currency.name,
                                style: 'currency'
                            }).format(transaction_data.receive.amount)}</p>
                        </div>
                    </CardBody>
                    <CardFooter>
                        <div className="savings-message" >
                            <h4>You save £66.19 compared your bank!</h4>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        );
    }
}

export default TransactionDetail;