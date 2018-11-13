import React from 'react';
import { mount } from "enzyme";

import Navbar from "./Navbar";

describe.only('<Navbar />', () =>  {
    it('Should create navbar element', () => {
        expect(mount(<Navbar />).find('nav').hasClass('nav-wrap')).toBeTruthy();
    });

    it('Should have children', () => {
        expect(
            mount(<Navbar><p>Test</p></Navbar>)
            .find('nav')
            .childAt(0)
            .type()
        ).toEqual('p');
    });
});