import React, { Component } from 'react';
import './App.css';
import MyBanner from './MyBanner';

class App extends Component {

  render() {

    const myAddress = {
      street: 'Updated_some',
      city: 'City',
      state: '__',
      zip: '12334'
    };

    return (
      <div>
        <MyBanner
          name="Sample Node App. DevOps Basic"
          address={myAddress}
        />
      </div>
    );
  }
}

export default App;
