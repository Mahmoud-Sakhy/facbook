import Card from "../Card/Card";
const CardLest = ({ name, deletHand }) => {
  const cards = name.map(({ id, ...otherProps }) => (
    <Card key={id} {...otherProps} id={id} deletHand={deletHand} />
  ));

  return <div>{cards} </div>;
};

export default CardLest;
