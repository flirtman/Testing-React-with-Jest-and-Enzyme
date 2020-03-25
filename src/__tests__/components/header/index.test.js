import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../components/header/index';



describe('Header Component', () => {
    it('It should render without errors', () => {
        const component = shallow(<Header/>);
        const wrapper = component.find('.headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('It should render a logo', () => {
        const component = shallow(<Header/>);
        const logo = component.find('.logo-adidas');
        expect(logo.length).toBe(1);
    });
});