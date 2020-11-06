import React, {Component} from 'react'

export default class PetForm extends Component {

  state = {
    caption: "",
    url: "",
    emotion: ""
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
      url: "",
      emotion: "",
    })
  }

  render(){
    const { onChange, onSubmit, state } = this
    const { caption, url, emotion } = state
    return(
      <form onSubmit={onSubmit}>
        <label>
          Caption:
          <input type="text" name="caption" onChange={onChange} value={caption} />
        </label>
        <br/>
        <label>
          Pet Image URL:
          <input type="text" name="url" onChange={onChange} value={url} />
        </label>
        <br/>
        <label>
          Emotion:
          <select name="emotion" value={ emotion } onChange={ onChange } >
            <option value="" disabled >Select your emotion</option>
            <option value="Sad">Sad</option>
            <option value="Happy">Happy</option>
            <option value="Neutral">Neutral</option>
            <option value="Alert">Alert</option>
          </select>
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
