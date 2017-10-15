import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';
import { max_number } from '../helper';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifts: [],
    };
  }
  
  addGift = (t) => {
    const { gifts } = this.state;
    const ids = gifts.map(gift => gift.id);
    gifts.push({id: max_number(ids) + 1});
    this.setState({ gifts })
  }
  removeGift = (id) =>{
    const gifts = this.state.gifts.filter( gift => gift.id !== id);
    this.setState({ gifts });
  }
  render() {
    const { gifts } = this.state;
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className='gift-list'>
          {gifts.map(gift => {
            return (
              <Gift
                key={gift.id}
                gift={gift}
                removeGift={this.removeGift}
              />
            )
          })}
        </div>
        <Button onClick={this.addGift} className="btn-add">Add gift</Button>
      </div>
    );
  }
}

export default App;
