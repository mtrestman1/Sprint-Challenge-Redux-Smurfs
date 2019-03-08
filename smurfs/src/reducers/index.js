import {
FETCH_SMURFS_START,
FETCH_SMURFS_SUCCESS, 
FETCH_SMURFS_FAILURE,
ADD_SMURFS,
ADD_SMURFS_SUCCESS,
ADD_SMURFS_FAILURE
} from '../actions/index';




/*
  Be sure to import in all of the action types from `../actions`
*/
  const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const smurfReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case FETCH_SMURFS_START:
    return {
      ...state,
      fetchingSmurfs: true,
      error: null
    }
    case FETCH_SMURFS_SUCCESS:
    return {
      ...state,
      fetchingSmurfs: false,
      smurfs: action.payload,
      error: null
    }
    case FETCH_SMURFS_FAILURE:
    return {
      ...state,
      fetchingSmurfs: false,
      error: action.payload
    }
    case ADD_SMURFS:
    return {
      ...state,
      fetchingSmurfs: false,
      addingSmurf: true,
      error: null
    }
    case ADD_SMURFS_SUCCESS:
    return {
      ...state,
      smurfs: action.payload
      
    } 
    case ADD_SMURFS_FAILURE:
    return {
      ...state,
      error: action.payload
    }
    default: 
    return state;
  }
}
 