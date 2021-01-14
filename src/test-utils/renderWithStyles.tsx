import * as React from 'react';
import { render } from '@testing-library/react';
import '../styles/App.scss';

export const renderWithStyles = (ui: React.ReactElement, options = {}) =>
  render(ui, options);
