import React, { Component } from 'react';
import './App.css'; 
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        users: [
        { 
          startingUserName: "Pickle Rick", userName: "Pickle Rick"
        },
        {
          startingUserName: "Cool Rick", userName: "Cool Rick"
        }, 
        {
          startingUserName: "Evil Morty", userName: "Evil Morty"
        }
      ]
    };
  }

  switchNameHandler = (event) => {
    this.setState({
      users: [
        { startingUserName: "Pickle Rick", userName: event.target.value },
        { startingUserName: "Cool Rick", userName: 'Super Cool Rick' },
        { startingUserName: "Evil Morty", userName: 'Evil Morty' }
      ]
    });
  }

  render() {


    return (
      <div className="App">
        <h1>Hello there</h1>
        <UserOutput startingUserName={this.state.users[0].startingUserName} userName={this.state.users[0].userName} />
        <UserOutput startingUserName={this.state.users[1].startingUserName} userName={this.state.users[1].userName} />
        <UserOutput startingUserName={this.state.users[2].startingUserName} userName={this.state.users[2].userName} />
        <UserInput changed={this.switchNameHandler} name={this.state.users[0].userName} />
      </div>
    );
  }
}

export default App;
