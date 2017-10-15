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
    const ID = 1;
    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });
    afterEach(() => { 
      app.setState({ gifts: [] });
    });
    it('Add a new gift `state`', () => {
      expect(app.state().gifts).toEqual([{ id: ID }]);
    });
    it('Adds a new gift to the render list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });
    it('Creates a gift component', () => {
      expect(app.find('Gift').exists()).toBe(true);
    })
    describe('And the user wants to remove the addd gift', () => {
      beforeEach(() => {
        app.instance().removeGift(ID);
      });
      it('removes the gift from `state`', () => {
        expect(app.state().gifts).toEqual([]);
      });
    });
  });
});

