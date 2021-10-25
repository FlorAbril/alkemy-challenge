import { useState, useEffect } from "react";

export function useLocalStorage (key){
    const [value, setValue] = useState(()=>window.localStorage.getItem(key))

    const saveValue = (newValue)=> {
      window.localStorage.setItem(key, newValue)
      setValue(newValue)
      window.dispatchEvent(new Event('storage'))
      window.dispatchEvent(new Event("local-storage"));
    }
    
    useEffect(()=>{
      const handleLocalStorage = ()=>{
        setValue(window.localStorage.getItem(key))
      }
      window.addEventListener('local-storage', handleLocalStorage)
      window.addEventListener('storage', handleLocalStorage)
    },
    [key, value])

    return [value, saveValue]
}