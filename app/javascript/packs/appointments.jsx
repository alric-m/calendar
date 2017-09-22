import React from 'react'
import ReactDOM from 'react-dom'
import update from 'immutability-helper'
import AppointmentsList from './appointments_list'
import AppointmentForm from './appointment_form'

class Appointments extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      appointments: this.props.appointments,
      title: "",
      starting_date: ""
    }

    this.handleUserInput    = this.handleUserInput.bind(this);
    this.handleFormSubmit   = this.handleFormSubmit.bind(this);
    this.addNewAppointment  = this.addNewAppointment.bind(this);
  }

  handleFormSubmit() {
    const new_appointment = {
      title: this.state.title,
      starting_date: this.state.starting_date
    }

    $.post('/appointments', {appointment: new_appointment})
      .done((data) => {
        this.addNewAppointment(data)
      }
    )
  }

  addNewAppointment(appointment) {
    const appointments = update(this.state.appointments, {
      $push: [appointment]
    })

    this.setState({
      appointments: appointments.sort((a, b) => {
        const date_a = new Date(a.starting_date)
        const date_b = new Date(b.starting_date)

        return (date_a - date_b)
      })
    })
  }

  handleUserInput(obj) {
    this.setState(obj)
  }


  render() {

    const appointments = this.state.appointments

    return (
      <div>
        <AppointmentForm
          input_title={this.state.title}
          input_date={this.state.starting_date}
          onUserInput={this.handleUserInput}
          onFormSubmit={this.handleFormSubmit}
        />
        <AppointmentsList appointments={appointments} />
      </div>
    );
  };

};

export default Appointments;

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('appointments')
  const data = JSON.parse(node.getAttribute('data'))

  ReactDOM.render(
    <Appointments appointments={data} />,
    document.body.appendChild(node),
  )
})
