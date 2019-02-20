import React, { Component } from 'react';
import axios from 'axios';

import './list.css'

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
        <table class="list">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Funds</th>
            <th>City</th>
            <th>Phone</th>
          </tr>
          {this.state.persons.map((person) => (
          <tr>
            <th key={person.id}>
              <input type="text" value={person.name}/>
            </th>
            <th key={person.id}>
            <input type="text" value={person.email}/>
            </th>
            <th key={person.id}>
            <input type="text" value={person.funds}/>
            </th>
            <th key={person.id}>
            <input type="text" value={person.city}/>
            </th>
            <th key={person.id}>
            <input type="text" value={person.phone}/>
            </th>
          </tr>
            ))}
          </table>
      </div>
    )};
}

export default List;
