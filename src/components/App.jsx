import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifts: [],
    };
  }

  addGift = () => {
    const { gifts } = this.state;
    const ids = gifts.map(gift => gift.id);
    const max_id = ids.length >0 ? Math.max(...ids) : 0;
    gifts.push({id: max_id + 1});
    this.setState({ gifts })
  }
  render() {
    const { gifts } = this.state;
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className='gift-list'>
          {gifts.map(gift => {
            return (
              <Gift key={gift.id} />
            )
          })}
        </div>
        <Button onClick={this.addGift} className="btn-add">Add gift</Button>
      </div>
    );
  }
}

export default App;
