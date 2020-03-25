import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../components/header/index';

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('It should render without errors', () => {
        const wrapper = component.find('.headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('It should render a logo', () => {
        const logo = component.find('.logo-adidas');
        expect(logo.length).toBe(1);
    });
});