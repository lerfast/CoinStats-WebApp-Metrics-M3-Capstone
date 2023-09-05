import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../NavBar';

test('renders NavBar with Home link', async () => {
  render(
    <Router>
      <NavBar />
    </Router>,
  );

  const homeLink = await screen.findByText('Home');
  expect(homeLink).toBeInTheDocument();
});
