import React from 'react'
import { formatDate } from '../utils'

class Appointment extends React.Component {

  render() {

    const appointment = this.props.appointment

    return (
      <li key={appointment.id}>
        <h3>{appointment.title}</h3>
        <p>{formatDate(appointment.starting_date)}</p>
      </li>
    );
  };

};

export default Appointment;
