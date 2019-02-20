import React, { Component } from 'react';
import axios from 'axios';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      count: 0,
    };

}

  componentDidMount() {
    axios.get(`http://localhost:8080/`)
    .then(res => {
      console.log(res);
      this.setState({
        persons: res.data.data,
        count: res.data.count,
      });
    });
  }

  render() {
    return (
      <div>
        <div>Count: {this.state.count}</div>
        {this.state.persons.map((person) => (<div key={person.id}>{person.name}</div>))}
      </div>
    )};
}

export default List;
