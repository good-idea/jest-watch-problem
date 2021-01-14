import * as React from 'react';
import { renderWithStyles } from '../../test-utils/renderWithStyles';
import BlockQuote from '../BlockQuote';

describe('components/BlockQuote', () => {
  it('should match snapshot', async () => {
    const { findByText } = renderWithStyles(<BlockQuote text="Hello World" />);
    expect(findByText('Hello World')).toBeTruthy();
  });
});
