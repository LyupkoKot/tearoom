import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import Dashboard from '../Dashboard';


test('should receive the TITLE', () => {
  const handlePress = jest.fn().mockReturnValue(() => {});

  const { getByText } = render(

      <Dashboard />

  );
  const button = getByText(/Name/i);
  fireEvent.click(button);
  expect(handlePress.toBe('TITLE'));
});
