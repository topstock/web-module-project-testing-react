import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const episodeData = {
    id: 578669,
    number: 8,
    runtime: 55,
    name: "Chapter Eight: The Upside Down",
    image: "https://www.tvmaze.com/episodes/578669/stranger-things-1x08-chapter-eight-the-upside-down.",
    summary: "Jim convinces Brenner to let him and Joyce enter the Upside Down to find Will... unaware that Brenner plans to recover Jane no matter what it takes. Meanwhile, Nancy and Jonathan prepare to trap the monster at the Byers house, but receive an unexpected visitor.",
    season: 1
}

test("renders without error", () => {
    render(<Episode episode={episodeData} />)
});

// test("renders the summary test passed as prop", ()=>{
//     const episode = { ...episodeData, summary: 'Lorem ipsum dolor sept.'}
//     render(<Episode episode={episode} />)
//     const summaryProp = screen.getByText(/Lorem ipsum dolor sept/ig);
//     expect(summaryProp).toBeInTheDocument();
// });

// test("renders default image when image is not defined", ()=>{
//     let episode = { ...episodeData, image: ''};
//     render(<Episode episode={episode} />);
//     const imageLoaded = screen.queryByRole('img');
//     expect(imageLoaded.src).toBe('https://i.ibb.co/2FsfXqM/stranger-things.png');
// });
