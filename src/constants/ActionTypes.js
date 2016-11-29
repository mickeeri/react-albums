// @flow

export type Action = 
    { type: 'FETCH_ALBUMS_SUCCESS', response: { entities: Object, result: Array<number> } }
  | { type: 'NETWORK_ERROR', errorMessage: string }
  | { type: 'FETCH_ERROR', errorMessage: string }
  | { type: 'RESET_ERROR_MESSAGE' }
  | { type: 'FETCHING_DATA', typeOfData: string }
  | { type: 'TOOGLE_ADD_ALBUM_FORM', display: boolean }
  | { type: 'ADD_ALBUM_SUCCESS', response: Object, successMessage: string }
  | { type: 'RESET_SUCCESS_MESSAGE' }

export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;
export type ActionCreator = (params: any) => Action

