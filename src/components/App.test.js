import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('render App component correctly', () => {
  expect(app).toMatchSnapshot();
});

it('Initializes the `state` with empty list of gifts', () => {
  expect(app.state().gifts).toEqual([]);
});

it('Add a new gift `state` when clicking on `add button`', () => {
  app.find('.btn-add').simulate('click');

  expect(app.state().gifts).toEqual([{ id: 1 }]);
});
