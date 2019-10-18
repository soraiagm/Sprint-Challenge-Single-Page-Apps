import React from "react";
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';


const CharacterCard = (props) => {
  return (
    <div className="each-character">
      <Card>
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.gender}</CardSubtitle>
          <CardSubtitle>{props.species}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default CharacterCard;