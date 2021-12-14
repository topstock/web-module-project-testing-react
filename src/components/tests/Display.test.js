import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from './../Display';

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

test('renders without errors with no props', ()=>{
    render(<Display />);
});

test('renders Show component when the button is clicked ', async ()=>{
    const mockFetchShow = jest.fn( () => {

    })
    render(<Display show={showData} selectedSeason='none' />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    const showDescription = screen.findByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua/i);
    // const showDescription = await waitFor(() => {
    //     return screen.queryByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua/i)
    // });
   expect(showDescription).toHave(value, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
});

test('renders show season options matching your data when the button is clicked', ()=>{});

test('renders show season options matching your data when the button is clicked', ()=>{});
