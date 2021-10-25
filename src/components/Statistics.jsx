import { useContext } from "react";
import { Card, ListGroup, ProgressBar } from "react-bootstrap";
import { HeroesContext } from "../store/HeroesProvider";

export default function Statistics() {
  const [{ heroesTeam }] = useContext(HeroesContext);
  const totalPowerstats = {
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0,
  };
  let totalWeight = 0;
  let totalHeight = 0;
  let validHeroes = heroesTeam.length;

  heroesTeam.forEach((hero) => {
    const parseHeight = parseInt(hero.appearance.height.replace(" cm", ""));
    const parseWeight = parseInt(hero.appearance.weight.replace(" kg", ""));
    if (parseHeight === 0 || parseWeight === 0) {
      validHeroes -= 1;
    }
    totalHeight += parseHeight;
    totalWeight += parseWeight;
  });

  const averageHeight = totalHeight / validHeroes;
  const averageWeight = totalWeight / validHeroes;

  heroesTeam.map((hero) => {
    for (let key in hero.powerstats) {
      if (hero.powerstats[key] !== "null") {
        totalPowerstats[key] += parseInt(hero.powerstats[key]);
      }
    }
  });

  //order the powerstats from highest to lowest
  const orderedPowerstats = Object.entries(totalPowerstats).sort(
    (key1, key2) => key2[1] - key1[1]
  );

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div style={{ display: "flex", columnGap: "1em", flexWrap: "wrap" }}>
      <Card style={{ marginBottom: "1em", flexGrow: "1", flexBasis: "20rem" }}>
        <Card.Header>Powerstats acumulados</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            {orderedPowerstats.map(([key, value]) => {
              const capitalizedKey = capitalizeFirstLetter(key);
              return (
                <ListGroup.Item key={key}>
                  <label>{capitalizedKey}</label>
                  <ProgressBar
                    variant="success"
                    max="600"
                    now={value}
                    label={value}
                  />
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Card.Body>
      </Card>
      <Card style={{height:"fit-content"}}>
        <Card.Header>Peso y altura promedios</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>Peso: {averageWeight} kg</ListGroup.Item>
            <ListGroup.Item>Altura: {averageHeight} cm</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}
