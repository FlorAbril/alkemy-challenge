import { useState, useEffect } from "react";

export function useLocalStorage (key){
    const [value, setValue] = useState(()=>localStorage.getItem(key))

    const saveValue = (value2)=> {
      localStorage.setItem(key, value2)
      setValue(value2)
      window.dispatchEvent(new Event('storage'))
    }
    useEffect(()=>{
      window.onstorage = ()=>{
        setValue(localStorage.getItem(key))
      }
    },
    [key])

    return [value, saveValue]
}