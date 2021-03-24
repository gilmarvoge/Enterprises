import React from 'react';
import LoginScreen from './index';
import renderer from 'react-test-renderer';

it('renders login page correctly', () => {
  const tree = renderer.create(
    <LoginScreen />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});



