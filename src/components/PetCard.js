import React, {Component} from 'react'

export default class PetCard extends Component {


  emotion = () => {
    switch(this.props.emotion) {
      case "Happy":
        return "😺"
      case "Sad":
        return "😿"
      case "Alert":
        return "🚨"
      case "Neutral":
        return "😐"
      default:
        return "🍳"
    }
  }

  render(){
    const { url, caption, username } = this.props
    return (
    <div className="card">
      <img src={url} alt="adorable pet"/>
      <h3>{caption}</h3>
      <p>Pet status: {this.emotion()}</p>
      <p>Respectfurry submitted by the Honorable {username}</p>
    </div>
    )
  }

}
