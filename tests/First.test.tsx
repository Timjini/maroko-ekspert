import React from 'react'
import {First} from '../src/First';
import {render} from '@testing-library/react';

describe('First Test', ()=>{
    it('Should render component', ()=>{
        render(<First/>)
        expect(true).toBeTruthy()
    })
})