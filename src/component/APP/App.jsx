import Container from "react-bootstrap/Container";
import Card from "../Card/Card";

import { useState, useRef } from "react";
import Filter from "../Felter/Filter";

// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
const App = () => {
  const inputEl = useRef(null);
  const [cardToggle, setCard] = useState(true);
  const [sherFil, sharshFilter] = useState("");
  const [state, setStet] = useState([
    {
      id: 1,
      title: "Prof",
      descrption: "I am Prof sakhy anwer Prof",
      img: "./src/img/phot.png",
      type: "boy",
    },
    {
      id: 2,
      title: "Mahmoud",
      descrption: "I am Mahmoud sakhy anwer",
      img: "./src/img/phot1.png",
      type: "boy",
    },

    {
      id: 3,
      title: "aya",
      descrption: "I am aya anwer sakhy",
      img: "./src/img/phot2.png",
      type: "girl",
    },
    {
      id: 4,
      title: "smah",
      descrption: "I am smah sakhy mahmoud",
      img: "./src/img/phot3.jfif",
      type: "girl",
    },
  ]);
  const cheng = () => {
    console.log(inputEl.current.value);
  };
  const deletHand = (el, selectedID) => {
    // const dleteOb = state.filter((el, idx) => idx !== clickedIdx);
    // setStet(dleteOb);
    // كود مختصر والكود الاساسي لحذف العناصؤ
    setStet(state.filter((el) => el.id !== selectedID));
  };
  const filterHero = (hero) => {
    sharshFilter(hero);
  };
  const nemasFL = () => {
    if (sherFil.length !== 0) {
      return state.filter((el) => el.hero.include(sherFil));
    }
    return state;
  };
  return (
    <div>
      <Container>
        <Filter filterHero={filterHero} />
        <button className="xxx" onClick={() => setCard(!cardToggle)}>
          {cardToggle ? "Hide Name" : "Show Name"}
        </button>
        <form>
          <input type="text" ref={inputEl} onChange={cheng} />
        </form>
        <div className={cardToggle ? "show" : "hide"}>
          <Card name={nemasFL()} deletHand={deletHand} />
        </div>
      </Container>
    </div>
  );
};

export default App;
