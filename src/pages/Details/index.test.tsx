import React from 'react';
import DetailsScreen from './index';
import renderer from 'react-test-renderer';

it('renders login page correctly', () => {
  const tree = renderer.create(
    <DetailsScreen />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});



