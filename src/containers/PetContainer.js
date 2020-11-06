import React from 'react'
import PetForm from '../components/PetForm'
import PetCard from '../components/PetCard'
import Filter from '../components/Filter'

export default class PetContainer extends React.Component {

  state = {
    filter: "",
    sort: "username",
  }

  onChange = (e) => {
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  filterPets = () => this.state.filter ? this.props.pets.filter(pet => pet.emotion === this.state.filter) : this.props.pets

  sortPets = () => this.filterPets().sort((petA, petB) => petA[this.state.sort].localeCompare(petB[this.state.sort]))

  renderPets = () => this.sortPets().map(pet => <PetCard { ...pet } key={ pet.id } />)

  render(){
    const { onChange, renderPets, state, props } = this
    const { username, logout, addPet } = props
    const { filter, sort } = state
    return (
      <>
        <button onClick={ logout }>Logout</button>
        <h1>Welcome, { username }!</h1>
        <PetForm addPet={ addPet } />
        <br/>
        <Filter onChange={ onChange } filter={ filter } sort={ sort } />
        <div className="cards">{ renderPets() }</div>
      </>
    )
  }
}



// Logout Button
// Form to add a pet and caption
// A bunch of different pets
