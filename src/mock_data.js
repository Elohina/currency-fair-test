import EUR_IMG from "./assets/images/EUR.png";
import GBP_IMG from "./assets/images/GBP.png";

const TRANSACTION_DATA = {
    "send": {
        "amount": 2000.00,
        "currency": {
            "name": 'EUR', "img": EUR_IMG, "symbol": "€"
        }
        },
    "receive": {
        "amount": 1717.94,
        "currency": {
            "name": 'GBP', "img": GBP_IMG, "symbol": "£"
        }
    },
    "rate": 0.86022,
    "fee": 2.50,
    "delivery_date": "2018-11-25",
    "user": {
        "phone": {
            "code": "+353",
            "number": "872251177"
        }
    }
};

export default TRANSACTION_DATA;