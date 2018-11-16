import React from "react";
import { mount } from "enzyme";

import Modal from "./Modal";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import ModalBody from "./ModalBody";


describe('<Modal />', ()=>{
    afterEach(() => {
        document.body.innerHTML = '';
    });

    it('Should render de modal content', () => {
        const wrapper = mount(
            <Modal open={true}>
                <p>Test</p>
            </Modal>
        );

        expect(
            wrapper
            .find('p')
            .text()
        ).toBe('Test');
    });
});


describe('<ModalHeader>', () => {
    it('Should render a div with .modal-header class', () => {
        expect(mount(<ModalHeader>Test</ModalHeader>).contains(
            <div className="modal-header">Test</div>
        )).toBeTruthy();
    });

    it('Should render a header with h2 correctly', () => {
        expect(mount(
            <ModalHeader>
                <h2>Test</h2>
            </ModalHeader>
        ).find('h2').text()).toBe('Test');
    });
});

describe('<Footer />', () => {
    it('Should render a div with .modal-footer class', () => {
        expect(mount(<ModalFooter>Test</ModalFooter>).contains(
            <div className="modal-footer">Test</div>
        )).toBeTruthy();
    });
});

describe('<ModalBody>', () => {
    it('Should render the modal body content', () => {
        expect(
            mount(
                <ModalBody>
                    <p>ModalBody text</p>
                </ModalBody>
            )
            .find('div.modal-body > p')
            .text())
            .toBe('ModalBody text');
    });
});