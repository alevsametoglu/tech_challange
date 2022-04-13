import React from "react";
import { ListGroup } from "react-bootstrap";
import "./HeroList.scss";

const HeroList = (props) => {
  return (
    <section className="person-list">
      <h4 style={{ color: props.titleColor }}>{props.title}</h4>
      <ListGroup className="list" as="ol" numbered>
        {props.heroList.map((hero) => {
          return <ListGroup.Item as="li">{hero}</ListGroup.Item>;
        })}
      </ListGroup>
    </section>
  );
};
export default HeroList;
