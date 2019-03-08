import {
FETCH_SMURFS_START,
FETCH_SMURFS_SUCCESS, 
FETCH_SMURFS_FAILURE,
ADD_SMURFS
} from '../actions/index';



/*
  Be sure to import in all of the action types from `../actions`
*/
  const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
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
    default: 
    return state;
  }
}