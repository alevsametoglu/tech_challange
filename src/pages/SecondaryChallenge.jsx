import React, { useEffect, useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { dbAPI } from "../api";
import HeroList from "../components/HeroList";
import "./SecondaryChallenge.scss";

const SecondaryChallenge = () => {
  const [inputValue, setInputValue] = useState("");
  const [heroList, setHeroList] = useState([]);

  useEffect(() => {
    if (heroList.length > 0) dbAPI.saveHeroList(heroList);
    else {
      dbAPI.getHeroList().then((list) => {
        !!list && setHeroList(list);
      });
    }
  }, [heroList]);

  const addHero = () => {
    if (inputValue.trim() === "") return;
    setHeroList((pv) => [inputValue, ...pv]);
    setInputValue("");
  };

  return (
    <div className="add-name">
      <h4>Ajouter un(e) Argonaute</h4>
      <InputGroup className="mb-3">
        <FormControl
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Nom de l'Argonaute"
        />
        <Button
          onClick={addHero}
          variant="outline-secondary"
          id="button-addon2"
        >
          Envoyer
        </Button>
      </InputGroup>
      <section>
        <HeroList title="Membres de l'équipage" heroList={heroList} />
      </section>
    </div>
  );
};

export default SecondaryChallenge;
