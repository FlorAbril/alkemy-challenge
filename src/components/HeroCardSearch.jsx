import { useContext } from "react";
import { Card, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { HeroesContext } from "../store/HeroesProvider";
import { ACTIONS } from "../store/HeroesReducer";

const HeroCardSearch = ({ hero }) => {
  const [{ heroesTeam, badHeroes, goodHeroes }, dispatch] =
    useContext(HeroesContext);
  const isGoodHero = hero.biography.alignment === "good";
  const isBadHero = hero.biography.alignment === "bad";
  const isNeutralHero = hero.biography.alignment === "neutral";
  
  const heroIsInTeam = (id) => {
    return heroesTeam.find((hero) => hero.id === id);
  };

  const handleSaveHero = (hero) => {
    dispatch({ type: ACTIONS.saveHero, payload: hero });
  };

  const handleRemoveHero = (id) => {
    dispatch({ type: ACTIONS.deleteHero, payload: id });
  };

  const disabledButton = (message) => {
    return(
    <OverlayTrigger
      overlay={
        <Tooltip id="tooltip-disabled">
          {message}
        </Tooltip>
      }
    >
      <span className="d-inline-block">
        <Button variant="outline-success" disabled>
          Añadir
        </Button>
      </span>
    </OverlayTrigger>
    )
  }

  return (
    <Card style={{ width: "12rem" }}>
      <Card.Img variant="top" src={hero.image} />
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title>{hero.name}</Card.Title>
        {(heroIsInTeam(hero.id) && 
          <Button
            variant="outline-danger"
            onClick={() => handleRemoveHero(hero.id)}
          >
            Eliminar
          </Button>
          ) ||
            (heroesTeam.length > 5 && disabledButton("No puedes añadir más de 6 héroes")) ||
          ( heroesTeam.length < 6 &&
            !heroIsInTeam(hero.id) &&
            ((goodHeroes < 3 && isGoodHero) || (badHeroes < 3 && isBadHero) || isNeutralHero) &&
              <Button
                variant="outline-success"
                onClick={() => handleSaveHero(hero)}
              >
                Añadir
            </Button>

          )||
           (!heroIsInTeam(hero.id) && isGoodHero && goodHeroes > 2 && disabledButton('No puedes añadir mas héroes buenos')) ||
           (!heroIsInTeam(hero.id) && isBadHero && badHeroes > 2 && disabledButton('No puedes añadir mas villanos'))
           }
        
  
      </Card.Body>
    </Card>
  );
};

// (badHeroes > 2 &&
//   <OverlayTrigger
//     overlay={
//       <Tooltip id="tooltip-disabled">
//         No puedes añadir mas héroes malos
//       </Tooltip>
//     }
//   >
//     <span className="d-inline-block">
//       <Button variant="outline-success" disabled>
//         Añadir
//       </Button>
//     </span>
//   </OverlayTrigger>
// )|| (goodHeroes > 2 &&
//   <OverlayTrigger
//     overlay={
//       <Tooltip id="tooltip-disabled">
//         No puedes añadir mas héroes buenos
//       </Tooltip>
//     }
//   >
//     <span className="d-inline-block">
//       <Button variant="outline-success" disabled>
//         Añadir
//       </Button>
//     </span>
//   </OverlayTrigger>
// )
export default HeroCardSearch;