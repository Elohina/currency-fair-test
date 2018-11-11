import React from "react";
import { mount } from "enzyme";

import Modal from "./Modal";

describe('<Moda />', ()=>{
    afterEach(() => {
        document.body.innerHTML = '';
    });

    it('Should render de modal content', () => {
        expect(
            mount(
                <Modal>
                    <p>Hola</p>
                </Modal>
            )
            .find('p')
            .text()
        ).toBe('Hola');
    });
})