import React from 'react';
import { mount } from "enzyme";

import { Navbar } from "./Navbar";

describe('<Navbar>', () => ) {
    it('Should create navbar element', () => {
        expect(mount(<Navbar />).hasClass('navbar')).toBeTruthy();
    })
}