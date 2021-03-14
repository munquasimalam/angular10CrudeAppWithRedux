import { createReducer,on } from "@ngrx/store";
import { setLoadingSpinner } from "./shared.action";
import { initialState } from "./shared.state";

const _sharedReducer = createReducer(
    initialState,
    on(setLoadingSpinner,(state,action)=>{
        return {
            state,
            showLoading:action.status
        }
    })
);
export function SharedReducer(state,action){
    return _sharedReducer(state,action);
}