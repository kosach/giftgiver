import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => { 
  const app = shallow(<App />);
  it('render App component correctly', () => {
    expect(app).toMatchSnapshot();
  });
  it('Initializes the `state` with empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('When clicking the `Add gift` button', () => { 
    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });

    afterEach(() => { 
      app.setState({ gifts: [] });
    });
    it('Add a new gift `state`', () => {
      expect(app.state().gifts).toEqual([{ id: 1 }]);
    });
    it('Adds a new gift to the render list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });

    it('Creates a gift component', () => {
      expect(app.find('Gift').exists()).toBe(true);
    })
  });
});

