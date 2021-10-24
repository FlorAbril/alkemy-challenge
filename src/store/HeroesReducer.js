const ACTIONS = {
  saveHero: 'save - hero',
  deleteHero: 'delete - hero'
}

const initialState = {
  heroesTeam:[]
}


const heroesReducer = (state,action) => {
  switch (action.type) {
    case ACTIONS.saveHero:
      return {...state, heroesTeam: [...state.heroesTeam, action.payload]}
    case ACTIONS.deleteHero:
      return {...state, heroesTeam: state.heroesTeam.filter(hero => hero.id !== action.payload.id)}
    default:
      return state
  }
}

export {initialState,ACTIONS}
export default heroesReducer