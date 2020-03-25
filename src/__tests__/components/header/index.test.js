import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './../../../../Utils';

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
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('It should render a logo', () => {
        const logo = findByTestAttr(component, 'logo-adidas');
        expect(logo.length).toBe(1);
    });
});