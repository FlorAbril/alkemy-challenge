const ACTIONS = {
  saveHero: 'save - hero',
  deleteHero: 'delete - hero'
}

const initialState = {
  badHeroes: 0,
  goodHeroes: 0,
  heroesTeam:[]
}


const heroesReducer = (state,action) => {
  switch (action.type) {
    case ACTIONS.saveHero:
        if(action.payload.biography.alignment === 'bad'){
          return {...state, heroesTeam: [...state.heroesTeam, action.payload], badHeroes: state.badHeroes + 1}
        }else if(action.payload.biography.alignment === 'good'){
          return {...state, heroesTeam: [...state.heroesTeam, action.payload], goodHeroes: state.goodHeroes + 1}
        }else{
          return {...state, heroesTeam: [...state.heroesTeam, action.payload]}
        }
    case ACTIONS.deleteHero:
      const hero = state.heroesTeam.find(hero => hero.id === action.payload)
      if(hero.biography.alignment === 'bad'){
        return {...state, heroesTeam: state.heroesTeam.filter(hero => hero.id !== action.payload), badHeroes: state.badHeroes - 1}
      }else if(hero.biography.alignment === 'good'){
        return {...state, heroesTeam: state.heroesTeam.filter(hero => hero.id !== action.payload), goodHeroes: state.goodHeroes - 1}
      }else{
        return {...state, heroesTeam: state.heroesTeam.filter(hero => hero.id !== action.payload)}
      }
    default:
      return state
  }
}

export {initialState,ACTIONS}
export default heroesReducer