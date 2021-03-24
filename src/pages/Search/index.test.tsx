import React from 'react';
import SearchScreen from './index';
import renderer from 'react-test-renderer';

it('renders login page correctly', () => {
  const tree = renderer.create(
    <SearchScreen />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});



