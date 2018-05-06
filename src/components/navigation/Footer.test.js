import React from 'react';
import { render } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import Footer from './Footer';

test('Footer component', () => {
  const { getByTestId } = render(
    <Footer />
  );

  expect(getByTestId('footer')).toHaveTextContent('Made byPrimož Suša');
});
