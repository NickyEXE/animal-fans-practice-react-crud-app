import React, {Component} from 'react'

export default class PetCard extends Component {


  render(){
    const {url, caption} = this.props.pet
    return (
    <div className="card">
      <img src={url} alt="adorable pet"/>
      <h3>{caption}</h3>
    </div>
    )
  }

}
