import React, {Component} from 'react'

export default class PetContainer extends Component {



  render(){
    console.log(this.props)
    return (
    <>
    <button>Logout</button>
    <h1>Welcome, {this.props.username}!</h1>
    </>
    )
  }

}




// Logout Button
// Form to add a pet and caption
// A bunch of different pets
