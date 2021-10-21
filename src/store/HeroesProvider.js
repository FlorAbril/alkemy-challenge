import { useReducer } from "react";
import { createContext } from "react";
import heroesReducer, { initialHeroes } from "./HeroesReducer";

const HeroesContext = createContext()

const HeroesProvider = ({children}) =>{
  const [heroes,dispatch] = useReducer(heroesReducer,initialHeroes)

  return(
    <HeroesContext.Provider value={[heroes,dispatch]}>
      {children}
    </HeroesContext.Provider>
  )
}

export {HeroesContext}
export default HeroesProvider