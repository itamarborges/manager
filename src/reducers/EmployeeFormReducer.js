import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CLEAR_REFERENCE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      //action.payload === { prop: 'value', value: 'jane'}
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CLEAR_REFERENCE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
