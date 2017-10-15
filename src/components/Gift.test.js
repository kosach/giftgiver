import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';

describe('Gift', () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = { gift: { id }, removeGift: mockRemove };
  const gift = shallow(<Gift {...props}  />);
  it('Renders properly', () => {
    expect(gift).toMatchSnapshot();
  });
  it('Initializes a person and present in `state`', () => {
    expect(gift.state()).toEqual({ person: '', present: '' });
  });

  describe('When typing into the person input', () => { 
    const person = 'Uncle';
    beforeEach(() => { 
      gift.find('.input-person').simulate('change', { target: { value: person } });
    });
    it('Update the person in `state`', () => { 
      expect(gift.state().person).toEqual(person);
    });
  });
  describe('When typing into the present input', () => { 
    const present = 'Golf clubs';
    beforeEach(() => { 
      gift.find('.input-present').simulate('change', { target: { value: present } });
    });
    it('Update the present in `state`', () => { 
      expect(gift.state().present).toEqual(present);
    });
  });
  describe('When ckickin the `remove Gift` button', () => {
    beforeEach(() => {
      gift.find('.btn-remove').simulate('click');
    });

    it('Calls the removeGift callback', () => {

    });
  });
});
