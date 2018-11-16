import React from "react";
import { mount } from "enzyme";

import Transaction from "./Transaction";
import TRANSACTION_DATA from "../../mock_data";

describe('<Transaction />', () => {
    it('Should render tabs with 3 steps for transaction', () => {
        const wrapper = mount(<Transaction transaction_data={TRANSACTION_DATA}/>);

        expect(wrapper.find('Tabs').length).toBe(1);
    });
    it('Should have a "Next" button', () => {
        const wrapper = mount(<Transaction transaction_data={TRANSACTION_DATA}/>);

        expect(wrapper.find('.next-container > button.primary').length).toBe(1);
    });
});