import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

const showData = {
    name: "Lorem ipsum",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    seasons: [
        { 
            id: 1234,
            name: "Lorem ipsum Season 1",
            episodes: []
        },
        {
            id: 2345,
            name: "Lorem ipsum Season 2",
            episodes: []
        },
        {
            id: 3456,
            name: "Lorem ipsum Season 3",
            episodes: []
        }
    ]
}


test('renders without errors', ()=>{
    render(<Show show={showData} selectedSeason='none' />);
});

test('renders Loading component when prop show is null', () => {
    render(<Show show={null} selectedSeason='none' />);
    const loadingText = screen.getByText(/Fetching data/ig);
    expect(loadingText).toBeInTheDocument();
});


test('renders same number of options seasons are passed in', ()=>{
    render(<Show show={showData} selectedSeason='none' />);
    const seasons = screen.getAllByTestId('season-option');
    expect(seasons.length).toBe(showData.seasons.length);
});

test('handleSelect is called when an season is selected', () => {
    const mockHandleSelect = jest.fn();
    render(<Show show={showData} selectedSeason='none' handleSelect={mockHandleSelect} />);
    const options = screen.getByRole('listbox');
    userEvent.selectOptions(options, ['1']);

    expect(mockHandleSelect).toBeCalled();
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {});
