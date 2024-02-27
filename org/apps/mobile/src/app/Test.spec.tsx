import React from 'react';
import { render } from '@testing-library/react-native';

import Test from './Test';

import { QueryClient, QueryClientProvider } from  "@tanstack/react-query";
test('renders correctly', () => {

  const queryClient = new QueryClient({})

  const { getByTestId } = render(
    <QueryClientProvider client={queryClient}>
      <Test />
    </QueryClientProvider>);
  expect(getByTestId('heading')).toHaveTextContent('Welcome');
});
