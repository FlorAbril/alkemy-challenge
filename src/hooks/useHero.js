import axios from "axios"

const newHero =  async (heroid) =>{
  let response
  let error 
  try{
   response = await axios
      .get(`https://superheroapi.com/api.php/4356384401116515/${heroid}`)
  }
  catch(e){
    error = e
  }
  const {id, name,powerstats,biography,appearance,work,image} = response.data

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

export default newHero