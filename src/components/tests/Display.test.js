import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from './../Display';
import fetchShow from './../../api/fetchShow';
jest.mock('./../../api/fetchShow');
console.log({fetchShow});
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
  
    fetchShow.mockResolvedValueOnce({
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
    });
    render(<Display show={null} selectedSeason='none' />);
   
    const button = screen.getByRole('button');
    userEvent.click(button);

    const heading = await screen.findByRole('heading');

    expect(heading).toBeInTheDocument();
});

test('renders show season options matching your data when the button is clicked', async ()=>{
    fetchShow.mockResolvedValueOnce({
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
    });
    render(<Display  show={null} selectedSeason='none' />);
   
    const button = screen.getByRole('button');
    userEvent.click(button);
    const option1 = await screen.findByText(/Lorem ipsum Season 1/i);
    const option2 = await screen.findByText(/Lorem ipsum Season 2/i);
    const option3 = await screen.findByText(/Lorem ipsum Season 3/i);

    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    expect(option3).toBeInTheDocument();
});

test('renders show season options matching your data when the button is clicked', async ()=>{
    fetchShow.mockResolvedValueOnce({
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
    });
    render(<Display show={null} selectedSeason='none' />);
   
    const button = screen.getByRole('button');
    userEvent.click(button);
    const options = await screen.findAllByTestId('season-option');

    expect(options.length).toBe(3);
});


test('runs optional function', async()=>{
    fetchShow.mockResolvedValueOnce({
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
    });
 const mockDisplayFunc = jest.fn();
 render(<Display displayFunc={mockDisplayFunc} show={null} selectedSeason='none'/>);
 
 const button = screen.getByRole('button');
 userEvent.click(button);
 await screen.findAllByTestId('season-option');
 expect(mockDisplayFunc).toBeCalled();
});