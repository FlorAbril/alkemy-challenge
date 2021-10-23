import { useReducer } from "react";
import { createContext } from "react";
import heroesReducer, { initialState } from "./HeroesReducer";

const HeroesContext = createContext()

const HeroesProvider = ({children}) =>{
  const [state,dispatch] = useReducer(heroesReducer,initialState)

  return(
    <HeroesContext.Provider value={[state,dispatch]}>
      {children}
    </HeroesContext.Provider>
  )
}

export {HeroesContext}
export default HeroesProvider