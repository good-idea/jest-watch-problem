import * as React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import App from '../App';
import { store } from 'store';

const MockApp: React.FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export const renderView = (path: string) => render(<MockApp />);
