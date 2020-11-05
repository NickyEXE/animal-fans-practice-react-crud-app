import React, {Component} from 'react'

export default class Login extends Component {

  state = {
    username: ""
  }

  onChange = (e) => {
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.setUsername(this.state.username)
    this.setState({username: ""})
  }


  render(){
    return (
      <>
        <h1>WHO WANTS TO ENTER THEIR MEME INTO THE HALL OF PET MEMES????</h1>
        <form onSubmit={this.onSubmit}>
          <label>
            Username:
            <input type="text" name="username" onChange={this.onChange} value={this.state.username} />
          </label>
          <input type="submit" value="Submit" />
        </form>

      </>
    )
  }
}
