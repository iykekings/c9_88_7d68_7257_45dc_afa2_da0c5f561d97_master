import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Bookings extends Component {
  constructor(props) {
    super(props);
  }

  handleGuestInfo = (event) => {
    this.props.inputNames(event.target.value);
  };
  handleDateInfo = (event) => {
    this.props.inputDates(event.target.value);
  };
  render() {
    const { names, dates, generate } = this.props;
    return (
      <div className="row">
        <TextField
          className="col-md-6"
          multiline
          value={names}
          onChange={this.handleGuestInfo}
          rows="4"
          placeholder="Enter the hacker list (one hacker per line)"
        />
        <TextField
          className="col-md-6"
          multiline
          value={dates}
          onChange={this.handleDateInfo}
          rows="4"
          placeholder="Enter the date range for each hacker's stay (one range per line)"
        />
        <Button
          variant="outlined"
          color="primary"
          className="block-center"
          onClick={generate}
        >
          Get Meals Schedule
        </Button>
      </div>
    );
  }
}

export default Bookings;
