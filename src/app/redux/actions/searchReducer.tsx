// reducers/searchReducer.ts
import { AnyAction } from 'redux';

interface SearchState {
  searchResults: any[]; // Adjust the type of searchResults based on your data structure
}

const initialState: SearchState = {
  searchResults: [],
};

const searchReducer = (state: SearchState = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'SET_SEARCH_RESULTS':
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
