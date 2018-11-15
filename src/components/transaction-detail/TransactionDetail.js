import React from "react";
import "./TransactionDetail.css";

import Card from "../common/Card/Card";
import CardHeader from "../common/Card/CardHeader";
import CardFooter from "../common/Card/CardFooter";
import CardBody from "../common/Card/CardBody";

class TransactionDetail extends React.Component {
    render() {
        return(
            <div className="detail-container">
                <Card>
                    <CardHeader>
                        <h4>Sending Details</h4>
                    </CardHeader>
                    <CardBody>
                        <h4>Receiving Details</h4>
                    </CardBody>
                    <CardHeader>
                        <h4>Receiving Details</h4>
                    </CardHeader>
                    <CardBody>
                        <h4>Receiving Details</h4>
                    </CardBody>
                    <CardFooter>
                        <h4>You save £66.19 compared your bank!</h4>
                    </CardFooter>
                </Card>
            </div>
        );
    }
}

export default TransactionDetail;