import React, {Component, PropTypes} from 'react';


class AlbumForm extends Component {

  componentDidMount() {
    this.titleInput.focus()
  }
  


  handleSubmit = (e: any) => {
    e.preventDefault()
    if (!this.titleInput.value) {
      return
    }
    this.props.addAlbum({ title: this.titleInput.value })
  }

  handleDiscard = (e) => {
    e.preventDefault()
    this.props.toggleForm()
  }

  render() {
    return (
      <li className="AlbumForm">
        <form onSubmit={this.handleSubmit}>
          <input 
            className="AlbumForm-input"
            type="text" 
            placeholder="Enter album title" 
            ref={input => {this.titleInput = input}} 
          />
          <button type="submit">Save</button>
          <button onClick={this.handleDiscard}>Discard</button>
        </form>
      </li>
    )
  }
}

AlbumForm.propTypes = {
  addAlbum: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

export default AlbumForm;