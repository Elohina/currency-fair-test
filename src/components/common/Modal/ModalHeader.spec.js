import React from "react";
import { mount } from "enzyme";

import ModalHeader from "./ModalHeader";

describe('<ModalHeader>', () => {
    it('Should render a div with .modal-header class', () => {
        expect(mount(<ModalHeader>Hola</ModalHeader>).contains(
            <div className="modal-header"></div>
        )).toBeTruthy();
    });

    it('Should render a header with h2 correctly', () => {
        expect(mount(
            <ModalHeader>
                <h2>Hola</h2>
            </ModalHeader>
        ).find('h2').text()).toBe('Hola');
    });
});