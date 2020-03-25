import React from 'react';
import {shallow} from 'enzyme';
import Headline from '../../../components/headline';
import { findByTestAttr, checkProps } from '../../../../Utils';
import { checkPropTypes } from 'prop-types';
import Header from '../../../components/header';

const setUp = (props = {}) => {
    const component = shallow(<Headline {...props}/>);
    return component;
} 

describe('Headline Component', () => {
    
    let wrapper;
    describe('Have props', () => {
        beforeEach (() => {
            const props = {
                header: 'Test Header',
                desc : 'Test Desc'
            };
            wrapper = setUp(props);
        });

        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        });

        it('Should render H1', () => {
            const component = findByTestAttr(wrapper, 'header');
            expect(component.length).toBe(1);
        });

        it('Should render description', () => {
            const component = findByTestAttr(wrapper, 'desc');
            expect(component.length).toBe(1);
        });
    });
    
    describe('Have no props', () => {
        beforeEach (() => {
            wrapper = setUp();
        });

        it('Should not render', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0);
        });
    });

    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test description',
                tempArr: [{
                    fName: 'Test fname',
                    lName: 'Test lName',
                    email: 'test@email.com',
                    age: 24,
                    onlineStatus: false
                }]
            };

            const propsErr = checkProps(Headline, expectedProps)
            expect(propsErr).toBeUndefined();
        })
    });
 
})