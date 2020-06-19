// constants
import {SET_USER_VALUE} from '../../assets/constants/index';

const initialState = {
  user: {},
  tea: {}
};

export function pokemonValueReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER_VALUE':
      return {...state, user: action.payload};
    case 'SET_TEA_VALUE':
      return {...state, tea: action.payload};
    default:
      return state;
  }
}
