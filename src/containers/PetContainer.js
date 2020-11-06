import React, {Component} from 'react'
import PetForm from '../components/PetForm'
import PetCard from '../components/PetCard'
import { v4 as uuidv4 } from 'uuid';

export default class PetContainer extends Component {

  state = {
    pets: []
  }

  addPet = (pet) => {
    let newPet = {...pet, id: uuidv4()}
    this.setState({pets: [...this.state.pets, newPet]})
  }

  renderPets = () => this.state.pets.map(pet => <PetCard pet={pet} key={pet.id} />)

  render(){
    console.log(this.state.pets)
    const { username, logout } = this.props
    return (
      <>
        <button onClick={ logout }>Logout</button>
        <h1>Welcome, { username }!</h1>
        <PetForm addPet={ this.addPet } />
        {this.renderPets()}
      </>
    )
  }

}




// Logout Button
// Form to add a pet and caption
// A bunch of different pets
