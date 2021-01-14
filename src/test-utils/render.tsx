import * as React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
}

const Providers = ({ children }: Props) => (
  <BrowserRouter>{children}</BrowserRouter>
);

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
