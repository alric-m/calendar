import React from 'react'
import Appointment from './appointment'

class AppointmentsList extends React.Component {

  render() {

    const appointments = this.props.appointments

    return (
      <ul className="appointments-list">
        {appointments.map((appointment) =>
          <Appointment key={appointment.id} appointment={appointment} />
        )}
      </ul>
    );
  };

};

export default AppointmentsList;
