import React from "react";
import { mount } from "enzyme";

import Card from "./Card";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

describe('<MultiCard>', () => {
    it('Should output a card with body data', () => {
        const wrapper = mount(
            <Card>
                <CardBody>Test Card</CardBody>
            </Card>
        );
        expect(
            wrapper.containsMatchingElement([
                <div className="card-container">
                    <div className="card-body">
                        Test Card
                    </div>
                </div>
            ])
        ).toBeTruthy();
    });

    it('Should render card header', () => {
        expect(
            mount(
                <Card>
                    <CardHeader>Card Header</CardHeader>
                    <CardBody>Card content</CardBody>
                </Card>
            ).containsMatchingElement([
                <div className="card-container">
                    <div className="card-header">
                        Card Header
                    </div>
                    <div className="card-body">
                        Card content
                    </div>
                </div>
            ])
        ).toBeTruthy();
    });
    it('Should render card footer', () => {
        expect(
            mount(
                <Card>
                    <CardBody>Card content</CardBody>
                    <CardFooter>Card footer</CardFooter>
                </Card>
            ).containsMatchingElement([
                <div className="card-container">
                    <div className="card-body">
                        Card content
                    </div>
                    <div className="card-footer">
                        Card footer
                    </div>
                </div>
            ])
        ).toBeTruthy();
    });
});