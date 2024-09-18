// types/searchTypes.ts

export interface SearchState {
    searchResults: Array<any>; // Replace `any` with the actual type of your search results
  }
  
  export interface SetSearchResultsAction {
    type: 'SET_SEARCH_RESULTS';
    payload: Array<any>; // Replace `any` with the actual type of your search results
  }
  
  export type SearchActionTypes = SetSearchResultsAction;
  