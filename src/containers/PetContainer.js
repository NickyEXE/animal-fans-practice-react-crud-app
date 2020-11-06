import React from 'react'
import PetForm from '../components/PetForm'
import PetCard from '../components/PetCard'

export default function PetContainer(props){

  const renderPets = () => props.pets.map(pet => <PetCard { ...pet } key={ pet.id } />)
  const { username, logout } = props
  return (
    <>
      <button onClick={ logout }>Logout</button>
      <h1>Welcome, { username }!</h1>
      <PetForm addPet={ props.addPet } />
      <div className="cards">{ renderPets() }</div>
    </>
  )
}



// Logout Button
// Form to add a pet and caption
// A bunch of different pets
