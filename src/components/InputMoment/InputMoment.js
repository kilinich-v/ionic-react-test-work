import { Component } from 'react'
import moment from 'moment'
import InputMoment from './input-moment'
import './scss/input-moment.scss'

export default class InputMomentApp extends Component {
  state = {
    m: moment(),
  }

  handleChange = m => {
    this.setState({ m })
  }

  handleSave = () => {
    console.log('saved', this.state.m.format('llll'))
  }

  render() {
    return (
      <div className="app">
        <form>
          <div className="input">
            <input type="text" value={this.state.m.format('llll')} readOnly />
          </div>
          <InputMoment moment={this.state.m} onChange={this.handleChange} minStep={30} onSave={this.handleSave} />
        </form>
      </div>
    )
  }
}
