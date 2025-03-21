import React from 'react'
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../src/App';
import "./i18nForTests";

describe('App', () => {
  it('should render the app component correctly', () => {
    render(<App />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

//   it('should display the Layout component when at the root path', () => {
//     // Setup a route to match "/"
//     window.history.pushState({}, 'Home', '/');
    
//     render(<App />);

//     // Check if something from the Layout component is rendered
//     expect(screen.getByText(/layout/i)).toBeInTheDocument();
//   });

//   it('should display the CityPage component when at "/cities/:slug"', () => {
//     // Setup a route to match "/cities/some-city"
//     window.history.pushState({}, 'City Page', '/cities/some-city');
    
//     render(<App />);

//     // Check if something from the CityPage component is rendered
//     expect(screen.getByText(/city page/i)).toBeInTheDocument();
//   });

//   it('should display the TourDetailPage component when at "/tours/:slug"', () => {
//     // Setup a route to match "/tours/some-tour"
//     window.history.pushState({}, 'Tour Detail', '/tours/some-tour');
    
//     render(<App />);

//     // Check if something from the TourDetailPage component is rendered
//     expect(screen.getByText(/tour detail/i)).toBeInTheDocument();
//   });
});
