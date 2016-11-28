import { Schema, arrayOf } from 'normalizr'

export const album = new Schema('albums')
export const arrayOfAlbums = arrayOf(album)