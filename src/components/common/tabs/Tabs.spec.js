import React from 'react';
import { mount } from "enzyme";

import { Tabs } from "./Tabs";

describe('<Tabs />', () => {
    const tabs_items = [
        {
            key: 1,
            title: '',
            subtitle: ''
        },
        {
            key: 2,
            title: '',
            subtitle: ''
        }
    ];

    it('Should show the correct tabs', () => {
        const wrapper = mount(<Tabs items = {tabs_items} />);

        expect(wrapper.find('li[key=1]').hasClass('.active')).toBeTruthy();
    });

    it('Should have children with the correct properties', ()=> {
        const wrapper = mount(<Tabs items = {tabs_items} />);
        expect(wrapper.find('a.tab')).toHaveLength(2);
    });

    it('Should call onSelect when tab is selected', done => {
        function onSelect(key) {
            expect(key).toBe('2');
            done();
        }

        mount(<Tabs onSelect={onSelect} items={tabs_items}/>)
        .find('li[key=2] a')
        .prop('onClick');
    });
})