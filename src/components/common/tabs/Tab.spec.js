import React from "react";
import { shallow } from "enzyme";

import Tab from "./Tab";

describe('<Tab />', () => {
    it('Should render Tab content', () => {
        expect(
            shallow(
                <Tab id="test" title="Test">
                    <p>Tab test</p>
                </Tab>
            ).matchesElement(
                <div id="test" className="tab-content">
                    <p>
                        Tab test
                    </p>
                </div>
            )
        ).toBeTruthy();
    })
})