import React from 'react'

export default function Filter(props){

  return (
    <form>
      <label>
        Filter by Emotion:
        <select name="filter" value={ props.filter } onChange={ props.onChange } >
          <option value="">All Pets</option>
          <option value="Sad">Sad</option>
          <option value="Happy">Happy</option>
          <option value="Neutral">Neutral</option>
          <option value="Alert">Alert</option>
        </select>
      </label>
      <label>
        Alphabetize by:
        <select name="sort" value={ props.sort } onChange={ props.onChange } >
          <option value="username">User</option>
          <option value="caption">Caption</option>
        </select>
      </label>
    </form>
  )
}
