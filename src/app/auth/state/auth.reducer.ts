import { loginSuccess, signupSuccess } from './auth.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState } from './auth.state';
import { Action } from 'rxjs/internal/scheduler/Action';

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    console.log(action);
    return {
      ...state,
      user: action.user,
    };
  }),
  on(signupSuccess,(state,action)=>{
    return {
      ...state,
      user:action.user,
    };
  })
);

export function AuthReducer(state, action) {
  return _authReducer(state, action);
}
