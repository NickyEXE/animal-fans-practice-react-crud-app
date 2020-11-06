import React, {Component} from 'react'

export default class PetForm extends Component {

  state = {
    caption: "",
    url: ""
  }

  onChange = (e) => {
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addPet(this.state)
    this.setState({
      caption: "",
      url: ""
    })
  }

  render(){
    return(
      <form onSubmit={this.onSubmit}>
        <label>
          Caption:
          <input type="text" name="caption" onChange={this.onChange} value={this.state.caption} />
        </label>
        <br/>
        <label>
          Pet Image URL:
          <input type="text" name="url" onChange={this.onChange} value={this.state.url} />
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
