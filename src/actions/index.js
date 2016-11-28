// @flow
import type { Action } from '../constants/ActionTypes'

export const resetSuccessMessage = (): Action => {
  return { type: 'RESET_SUCCESS_MESSAGE' }
}