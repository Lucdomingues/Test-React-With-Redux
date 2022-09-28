import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import renderWithRedux from './renderWithRedux';
import App from '../App';

describe('Test clicks', () => {
    it('click works', () => {
        renderWithRedux(<App />);
        
        const buttonClick = screen.getByRole('button', { name: /Clique aqui/i });

        expect(screen.getByText('0')).toBeInTheDocument();

        userEvent.click(buttonClick);

        expect(screen.getByText('1')).toBeInTheDocument();
    });
    
    it('click works with the state set', () => {
        renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 } } });

        const buttonClick = screen.getByRole('button', { name: /Clique aqui/i });

        expect(screen.getByText('10')).toBeInTheDocument();

        userEvent.click(buttonClick);

        expect(screen.getByText('11')).toBeInTheDocument();

        userEvent.click(buttonClick);

        expect(screen.getByText('12')).toBeInTheDocument();
    })
 });