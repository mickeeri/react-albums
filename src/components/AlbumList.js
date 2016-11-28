// @flow

import React, {PropTypes} from 'react'
import Loader from './Loader'
import ErrorMessage from './ErrorMessage'
import AlbumForm from './AlbumForm'

const AlbumList = ({isFetching, albums, displayForm, onAddAlbum}: Object) => {

  if (isFetching) {
    return <Loader />
  }

  if (!isFetching && albums.size === 0) {
    return <p>Hittar inga album</p>
  }

  return (
    <ul className="AlbumList">
      <ErrorMessage />
      {displayForm && <AlbumForm onAddAlbum={onAddAlbum} />}
      {albums.map(album => 
        <li key={album.id}>
          {album.title}
        </li>  
      )}
    </ul>
  )
}

AlbumList.propTypes = {
  albums: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  displayForm: PropTypes.bool.isRequired,
  onAddAlbum: PropTypes.func.isRequired,
}

export default AlbumList