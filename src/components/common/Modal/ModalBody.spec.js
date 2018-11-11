import React from "react";
import { mount } from "enzyme";

import ModalBody from "./ModalBody";

describe('<ModalBody>', () => {
    it('Should render the modal body content', () => {
        expect(
            mount(
                <ModalBody>
                    <p>ModalBody text</p>
                </ModalBody>
            )
            .find('div.modal-body p')
            .text())
            .toBe('Modal Text');
    });
});