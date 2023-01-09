// Write your code here

import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'

import Welcome from '../AppointmentItem'

class Appointments extends Component {
  state = {first: [], title: '', date: '', isStarred: false, isTrue: false}

  onSubmitApp = e => {
    e.preventDefault()
    const {title, date} = this.state
    const newdate = format(new Date(date), 'dd MMMM yyyy, EEEE')

    const newVal = {
      id: uuidv4(),
      title,
      date: newdate,
      isStarred: false,
    }
    this.setState(prev => ({
      first: [...prev.first, newVal],
      title: '',
      date: '',
    }))
  }

  onTitle = e => {
    this.setState({title: e.target.value})
  }

  onDate = e => {
    this.setState({date: e.target.value})
  }

  isStarredFun = id => {
    this.setState(prev => ({
      first: prev.first.map(each => {
        if (each.id === id) {
          return {...each, isStarred: !each.isStarred}
        }
        return each
      }),
    }))
  }

  onClickStarred = () => {
    const {isTrue} = this.state
    if (isTrue) {
      this.setState({isTrue: false})
    } else {
      this.setState({isTrue: true})
    }
  }

  render() {
    let {first} = this.state
    const {isTrue, title, date} = this.state

    if (isTrue) {
      const newlist = first.filter(each => each.isStarred === true)
      first = newlist
    }

    return (
      <div>
        <form onSubmit={this.onSubmitApp}>
          <h1>Add Appointment</h1>
          <label htmlFor="title1">Title</label>
          <input
            value={title}
            type="text"
            onChange={this.onTitle}
            id="title1"
            placeholder="Title"
          />
          <label htmlFor="date1">Date</label>
          <input
            value={date}
            type="date"
            onChange={this.onDate}
            id="date1"
            placeholder="DD/MM/YY"
          />
          <button type="submit">Add</button>
        </form>
        <img
          alt="appointments"
          src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
        />
        <h1>Appointments</h1>
        <button type="button" onClick={this.onClickStarred}>
          Starred
        </button>
        <ul>
          {first.map(each => (
            <Welcome
              isStarredFun={this.isStarredFun}
              key={each.id}
              appSubList={each}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Appointments
