import React, { Component } from 'react';
import Bookings from './components/Bookings';
import Meals from './components/Meals';
import Error from './components/Error';
import { genDates, getDatesFromString, getNamesFromString } from './helper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: '',
      dates: '',
      schedules: [],
      errors: [],
    };
  }
  render() {
    return (
      <div className="container-fluid">
        <center>
          <h2>Hacker Hostel</h2>
        </center>
        <div className="container">
          <Bookings
            generate={this.generate}
            names={this.state.names}
            inputNames={this.handleNameChange}
            dates={this.state.dates}
            inputDates={this.handleDateChange}
          ></Bookings>
          <Error errors={this.state.errors}></Error>
          <Meals schedules={this.state.schedules}></Meals>
        </div>
      </div>
    );
  }
  handleNameChange = (names) => {
    this.setState({ names });
  };
  handleDateChange = (dates) => {
    this.setState({ dates });
  };

  generate = () => {
    if (this.state.names && this.state.dates) {
      let err = [];
      const persons = getNamesFromString(this.state.names) || [];
      const when = getDatesFromString(this.state.dates).map(([start, end]) =>
        genDates(start, end).map((d) =>
          d.replace(
            /(\d{4})-(\d{2})-(\d{2})/,
            (_, i, j, k) => `${i + '-' + +j + '-' + +k}`
          )
        )
      );
      let store = [];
      persons.forEach((person, i) => {
        if (when[i].length) {
          when[i].forEach((w) => {
            store.push({ name: person, date: w, meal: 'aBreakfast' });
            store.push({ name: person, date: w, meal: 'bLunch' });
            store.push({ name: person, date: w, meal: 'cDinner' });
          });
        } else {
          err.push(person);
        }
      });
      store.sort((a, b) => {
        const ddiff = new Date(a.date) - new Date(b.date);
        if (ddiff === 0) {
          return a.meal < b.meal ? -1 : 1;
        }
        return ddiff;
      });
      this.setState({ schedules: store });
      this.setState({ errors: err });
    }
  };
}

export default App;
