import React from 'react'
import Datetime from 'react-datetime'

class AppointmentForm extends React.Component {

  constructor(props) {
    super(props)
    this.handleSubmit     = this.handleSubmit.bind(this);
    this.handleChange     = this.handleChange.bind(this);
    this.setStartingDate  = this.setStartingDate.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onFormSubmit()
  }

  handleChange(e) {
    const name = e.target.name
    const obj = {}
    obj[name] = e.target.value

    this.props.onUserInput(obj)
  }

  setStartingDate(e) {
    const name = "starting_date"
    const obj = {}

    if (obj[name] = e.toDate()) {
      this.props.onUserInput(obj)
    }
  }

  render() {
    const inputProps = {name: 'starting_date'}

    return (
      <div>
        <h3>New appointment</h3>
        <form onSubmit={this.handleSubmit}>

          <input type="text" name="title"
            value={this.props.input_title}
            onChange={this.handleChange}
          />

          <Datetime input={false}
            inputProps={inputProps}
            value={this.props.input_date}
            onChange={this.setStartingDate}
          />

          <input type="submit" value="Create appointment" />

        </form>
      </div>
    );
  };

};

export default AppointmentForm;
