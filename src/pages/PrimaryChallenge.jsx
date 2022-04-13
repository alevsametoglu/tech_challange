import React, { useState } from "react";
import "./PrimaryChallenge.scss";
import { heros } from "../heros.js";
import HeroList from "../components/HeroList";

export const PrimaryChallenge = () => {
  const [selectedTeam, setSelectedTeam] = useState([]);

  const chooseTeam = () => {
    const selectedHeros = [];
    const _heros = [...heros];
    for (let i = 0; i < 50; i++) {
      const index = Math.floor(Math.random() * _heros.length);

      const hero = _heros.splice(index, 1);
      selectedHeros.push(hero);
    }
    setSelectedTeam(selectedHeros);
  };
  return (
    <div>
      <main>
        <HeroList titleColor="maroon" title="Team" heroList={heros} />
        <button onClick={chooseTeam} type="button" class="btn btn-primary">
          choose my team
        </button>
        <HeroList titleColor="green" title="My team" heroList={selectedTeam} />
      </main>
    </div>
  );
};

export default PrimaryChallenge;
