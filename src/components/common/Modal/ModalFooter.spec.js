import React from "react";
import { mount } from "enzyme";

import ModalFooter from "./ModalFooter";

describe('<Footer />', () => {
    it('Should render a div with .modal-footer class', () => {
        expect(mount(<ModalFooter>Hola</ModalFooter>).contains(
            <div className="modal-footer"></div>
        )).toBeTruthy();
    });
});