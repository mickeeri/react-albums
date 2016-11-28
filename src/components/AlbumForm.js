import React, {Component, PropTypes} from 'react';


class AlbumForm extends Component {


  handleSubmit = (e: any) => {
    e.preventDefault()
    if (!this.titleInput.value) {
      return
    }
    this.props.onAddAlbum({ title: this.titleInput.value })
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
          <button 
            type="submit"
          >Save</button>
        </form>
      </li>
    )
  }
}

AlbumForm.propTypes = {
  onAddAlbum: PropTypes.func.isRequired,
};

export default AlbumForm;