import { useState } from "react";
const Filter = ({ filterHero }) => {
  const [Filter, setFilter] = useState("");

  const chHand = (el) => {
    const nameFil = el.target.value;
    setFilter(nameFil);
    setFilter(filterHero);
  };
  return (
    <div className="Filter">
      <input type="text" value={Filter} onChange={chHand} />
    </div>
  );
};
export default Filter;
