import React from "react";
import { mount } from "enzyme";

import Multicard from "./MultiCard";

describe('<MultiCard>', () => {
    it('Should output a card with body data', () => {
        const test_body = [
            {
                title: 'test',
                value: '123'
            }
        ]
        expect(mount(<MultiCard body={test_body}/>).contains(
            <div className="card">
                <div className="card-body">

                </div>
            </div>
        )).toBeTruthy();


    });
});