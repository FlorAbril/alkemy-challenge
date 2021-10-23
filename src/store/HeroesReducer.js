const ACTIONS = {
  saveSearch: 'save - search',
  deleteSearch: 'delete - search',
  saveHero: 'save - hero',
  deleteHero: 'delete - hero'
}

const initialState = {
  searchResults:{
    search:'',
    results:[]
  },
  heroesTeam:[]
}


const heroesReducer = (state,action) => {
  switch (action.type) {
    case ACTIONS.saveHero:
      return state.heroesTeam.push(action.payload)
    case ACTIONS.saveSearch:
      return {
        ...state,
        searchResults: {
          ...state.searchResults,
          search: action.payload.search,
          results: action.payload.results
        }
      }
    default:
      return state
  }
}

export {initialState,ACTIONS}
export default heroesReducer