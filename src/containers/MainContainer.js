import React, {Component} from 'react'
import Login from '../components/Login'
import PetContainer from './PetContainer'

export default class MainContainer extends Component {

  state = {
    username: "Batman"
  }

  setUsername = (username) => this.setState({username: username})

  render(){
    const { username } = this.state
    return (username === "" ? <Login setUsername={this.setUsername}/> : <PetContainer username={ username } logout={ () => this.setUsername("") }/>)
  }
}
