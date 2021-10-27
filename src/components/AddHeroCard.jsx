import { useContext } from "react";
import { Card, Button, OverlayTrigger, Tooltip, Badge, ListGroup } from "react-bootstrap";
import { HeroesContext } from "../store/HeroesProvider";
import { ACTIONS } from "../store/HeroesReducer";

const AddHeroCard = ({ hero }) => {
  const [{ heroesTeam, badHeroes, goodHeroes }, dispatch] =
    useContext(HeroesContext);
  const isGoodHero = hero.biography.alignment === "good";
  const isBadHero = hero.biography.alignment === "bad";
  
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
          Add to team
        </Button>
      </span>
    </OverlayTrigger>
    )
  }

  const AddCardButton = () => {
    if(heroIsInTeam(hero.id)){
      return (
        <Button variant="outline-danger" onClick={() => handleRemoveHero(hero.id)}>
          Delete
        </Button>
      )
    }else if(heroesTeam.length > 5){
      return disabledButton("Team is full")
    }else if(isGoodHero && goodHeroes > 2){
      return disabledButton("Good heroes limit reached")
    }else if(isBadHero && badHeroes > 2){
      return disabledButton("Bad heroes limit reached")
    }else {
      return (
        <Button variant="outline-success" onClick={() => handleSaveHero(hero)}>
          Add to team
        </Button>
      );
    }
  }

  return (
    <Card style={{ width: "12rem" }}>
      <Card.Img variant="top" src={hero.image} style={{height:'15rem'}}/>
      <Card.Body style={{textAlign:'center'}}>
        <Card.Title>{hero.name}</Card.Title>
        {AddCardButton()}   
      </Card.Body> 
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Badge pill bg={isGoodHero ? 'success' : isBadHero ? 'danger' : 'secondary'}>
            {isGoodHero ? 'Good' : isBadHero ? 'Bad' : 'Neutral'}
          </Badge>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default AddHeroCard;
{/* <ListGroup variant="flush">
          <ListGroup.Item>
            { AddCardButton() }
          </ListGroup.Item>
          <ListGroup.Item>
            <Badge pill bg={isGoodHero ? 'success' : isBadHero ? 'danger' : 'secondary'}>
              {isGoodHero ? 'Good' : isBadHero ? 'Bad' : 'Neutral'}
            </Badge>
          </ListGroup.Item>
        </ListGroup> */}