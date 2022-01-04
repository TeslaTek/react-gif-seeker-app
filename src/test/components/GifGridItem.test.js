import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem'

describe('testing GifGridItem component', () => {
    const title = 'xuxa';
    const url = 'https://media0.giphy.com/media/1xVfKGUiAh0TWrZkN9/giphy.gif?cid=be4fc6a44gfvd9765lcax753gy52pjo86o1e68fkxv3w68ju&rid=giphy.gif&ct=g'

    const wrapper = shallow(<GifGridItem title = {title} url = {url} />);
   
    test('should show the gif card', () => {            

        expect(wrapper).toMatchSnapshot();
    })

    test('debe tener titulo', () => {
         const h4 = wrapper.find('h4');
         expect(h4.text().trim()).toBe(title);

    })
    
    test('imagen con url', () => {
        const img = wrapper.find('img');
        expect( img.prop('src')).toBe(url);
        expect( img.prop('alt')).toBe(title)
    })
    
    test('clases', () => {

        const div = wrapper.find('div');
        const classList = div.prop('className');
        expect( div.hasClass('gifContainer')).toEqual(true);

        expect( classList.includes('gifContainer')).toBe(true)
        
    })
    
    
    
})
