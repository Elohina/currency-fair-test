import React from "react";
import { mount } from "enzyme";
import SplitCode from "./SplitCode";

describe('<SplitCode />', () => {

    it('Should call verification code function after change value', () => {
        const getVerificationCode = jest.fn();
        const wrapper = mount(<SplitCode onChangeInput={getVerificationCode} digits_number={6}/>);
        const event = {target: {value: "1"}};

        wrapper.find('#code-1').simulate('change', event);
        expect(getVerificationCode).toBeCalled();
    });
})