// @flow

import React, {PropTypes} from 'react'
import Loader from './Loader'
import AlertMessage from './AlertMessage'
import AlbumForm from './AlbumForm'

const AlbumList = ({isFetching, albums, displayForm, addAlbum, toggleForm }: Object) => {

  if (isFetching) {
    return <Loader />
  }

  if (!isFetching && albums.size === 0) {
    return <p>Did not find any albums</p>
  }

  return (
    <ul className="AlbumList">
      <AlertMessage />
      {displayForm && 
        <AlbumForm addAlbum={addAlbum} toggleForm={toggleForm} />
      }
      {albums.map(album => 
        <li key={album.id}>
          {album.title}
        </li>  
      )}
    </ul>
  )
}

AlbumList.propTypes = {
  albums: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  displayForm: PropTypes.bool.isRequired,
  addAlbum: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
}

export default AlbumList