import axios from "axios";
import { useState, useEffect } from "react";

const newHero = (heroData) => {
  const { id, name, powerstats, biography, appearance, work, image } = heroData;

  const hero = {
    id: id,
    name: name,
    powerstats: powerstats,
    biography: {
      fullName: biography["full-name"],
      aliases: biography.aliases,
      alignment: biography.alignment,
    },
    appearance: {
      height: appearance.height[1],
      weight: appearance.weight[1],
      eyeColor: appearance["eye-color"],
      hairColor: appearance["hair-color"],
    },
    work: {
      occupation: work.occupation,
      base: work.base,
    },
    image: {
      url: image.url,
    },
  };
  return hero;
};

const useSearchHero = (name) => {
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const fetchData = async () => {
		setLoading(true)
		setError(false)
		try {
      const response = await axios.get(
        `https://superheroapi.com/api.php/4356384401116515/search/${name}`
      );
			const heroes = response.data.results.map(newHero);
			setResults(heroes);
    } catch(e) {
      setError(true)
			console.error(e)
    }
		setLoading(false);

	}

	useEffect(() => {
		fetchData()
	}, [name]);

	return {results, loading, error}
}

export default useSearchHero;