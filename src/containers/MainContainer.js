import React, {Component} from 'react'
import Login from '../components/Login'
import PetContainer from './PetContainer'
import { v4 as uuidv4 } from 'uuid';

export default class MainContainer extends Component {

  state = {
    username: "",
    pets: [
      {
        caption: "I can haz bone?",
        url: "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg",
        id: 1,
        emotion: "Sad",
        username: "Greg",
      },
      {
        caption: "X-FORCE!",
        url: "https://images.dog.ceo/breeds/bulldog-french/n02108915_571.jpg",
        id: 2,
        emotion: "Alert",
        username: "Alice",
      },
      {
        caption: "I see wut u did ther",
        url: "https://images.dog.ceo/breeds/cotondetulear/IMAG1063.jpg",
        id: 3,
        emotion: "Alert",
        username: "Xenomorph from Alien"
      },
      {
        caption: "Don't talk to me or my son ever again",
        url: "https://images.dog.ceo/breeds/whippet/n02091134_12732.jpg",
        emotion: "Alert",
        id: 4,
        username: "Marsha",
      }
    ]
  }

  addPet = (pet) => {
    const {username, pets} = this.state
    let newPet = {...pet, id: uuidv4(), username: username}
    this.setState({pets: [...pets, newPet]})
  }

  setUsername = (username) => this.setState({username: username})

  render(){
    const { username, pets } = this.state
    return (username === "" ? <Login setUsername={ this.setUsername }/> : <PetContainer pets={ pets } addPet={ this.addPet } username={ username } logout={ () => this.setUsername("") }/>)
  }
}
