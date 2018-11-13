import React from 'react';
import { mount } from "enzyme";

import Tabs from "./Tabs";

describe('<Tabs />', () => {
    const tabs_items = [
        {
            key: 1,
            title: 'Test 1',
            subtitle: ''
        },
        {
            key: 2,
            title: 'Test 2',
            subtitle: ''
        }
    ];

    it('Should show the correct tabs', () => {
        const wrapper = mount(<Tabs items = {tabs_items} />);

        expect(wrapper.find('li#tab-1>a').text()).toBe('Test 1');
        expect(wrapper.find('li#tab-2>a').text()).toBe('Test 2');
    });

    it('Should have children with the correct properties', ()=> {
        const wrapper = mount(<Tabs items = {tabs_items} />);
        expect(wrapper.find('a.tab-link')).toHaveLength(2);
    });

    it('Should select correct tab after click', () => {
        const wrapper = mount(<Tabs items={tabs_items}/>)

        expect(wrapper.find('li#tab-1').hasClass('active')).toBeTruthy();
        expect(wrapper.find('li#tab-2').hasClass('active')).toBeFalsy();

        wrapper.find('li#tab-2 > a').simulate('click');

        expect(wrapper.find('li#tab-1').hasClass('active')).toBeFalsy();
        expect(wrapper.find('li#tab-2').hasClass('active')).toBeTruthy();
    });
})