import React from "react";
import "./Footer.css";

class Footer extends React.Component {
    render() {
        return(
            <div>
                <div className="separator"></div>
                <div className="footer-container wrapper-flex space-between">
                    <div className="copy-right">
                        <a href="/">© 2016 CurrencyFair</a>
                    </div>
                    <div className="wrapper-flex space-between help-legal">
                        <a href="/">Help & Support</a>
                        <a href="/">Legal Stuff</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;