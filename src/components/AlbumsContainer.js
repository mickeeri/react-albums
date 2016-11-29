// @flow

import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/albumActions'
import AlbumList from './AlbumList'
import { getAlbums } from '../reducers/albumsReducer'
import type { State } from '../reducers/index'

class AlbumsContainer extends Component {
  componentDidMount() {
    const { fetchAlbums } = this.props
    fetchAlbums()
  }

  handleOnUpdate = (): void => {
    this.props.fetchAlbums()
  }

  handleOnToggleAddForm = (): void => {
    const { displayForm, toggleAddAlbumForm } = this.props
    toggleAddAlbumForm(!displayForm)
  }

  handleOnAddAlbum = (formProps): void => {
    this.props.addAlbum(formProps)
  }

  render() {

    const {isFetching, albums, displayForm } = this.props
    
    return (
      <div className="AlbumsContainer">
        <div className="AlbumsContainer-heading">
          <h1>Albums</h1>
          <button disabled={isFetching} onClick={this.handleOnUpdate}>
            Update album list
          </button>
          <button disabled={isFetching || displayForm} onClick={this.handleOnToggleAddForm}>
            Add new album
          </button>
        </div>
        <AlbumList 
          albums={albums} 
          isFetching={isFetching} 
          displayForm={displayForm} 
          addAlbum={this.handleOnAddAlbum}
          toggleForm={this.handleOnToggleAddForm}
        />
      </div>
    )
  }
}

AlbumsContainer.propTypes = {
  fetchAlbums: PropTypes.func.isRequired,
  toggleAddAlbumForm: PropTypes.func.isRequired,
  addAlbum: PropTypes.func.isRequired,
}

const mapStateToProps = ({albums, isFetching}: State) => ({
  albums: getAlbums(albums),
  displayForm: albums.displayForm,
  isFetching,
})

export default connect(mapStateToProps, actions)(AlbumsContainer)