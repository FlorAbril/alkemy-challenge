import axios from "axios"

const newHero = (heroData) => {
  const {id, name,powerstats,biography,appearance,work,image} = heroData

  const hero = {
    id: id,
    name: name,
    powerstats: powerstats,
    biography: {
      fullName: biography["full-name"],
      aliases: biography.aliases,
      alignment: biography.alignment
    },
    appearance: {
      height: appearance.height[1],
      weight: appearance.weight[1],
      eyeColor: appearance["eye-color"],
      hairColor: appearance["hair-color"]
    },
    work: {
      occupation: work.occupation,
      base: work.base
    },
    image: {
      url: image.url
    }
  }
  return hero

}

const getHeroById =  async (heroid) =>{
  let response
  let error 
  try{
   response = await axios
      .get(`https://superheroapi.com/api.php/4356384401116515/${heroid}`)
  }
  catch(e){
    error = e
  }

  return newHero(response.data)
  
}

const getHeroesByName = async (name) =>{
  let response
  let error 
  try{
   response = await axios
      .get(`https://superheroapi.com/api.php/4356384401116515/search/${name}`)
  }
  catch(e){
    error = e
  }

  const search = response.data["results-for"]
  let results = []
  
  response.data.results.map(hero =>{
    results.push(newHero(hero))
  })

  return {search,results}
}

export {getHeroById,getHeroesByName}