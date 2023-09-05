import React from 'react';
import {
  render, fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import HomePage from '../HomePage';

// Mockeamos axios
jest.mock('axios');

describe('HomePage', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );

    // Puedes agregar expect() aquí para hacer assertions
  });

  it('displays cryptos based on search', async () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );

    const input = getByPlaceholderText('Find Crypto....');

    fireEvent.change(input, { target: { value: 'Bitcoin' } });

    // Debido a que estás mockeando axios, deberás simular la respuesta que esperas de la API.
    // Aquí es donde debes ajustar para adaptarlo a tus necesidades.
    // Por ejemplo:
    // await waitFor(() => screen.getByText('Bitcoin (BTC)'));

    // Puedes agregar más expect() aquí para hacer assertions
  });
});
