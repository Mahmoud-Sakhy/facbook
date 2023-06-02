const Card = ({ id, img, title, descrption, type, deletHand }) => {
  return (
    <div
      className="card"
      style={{ backgroundColor: type === "girl" ? "pink" : "green " }}
    >
      <img src={img} />
      <h1>title:{title} </h1>
      <h3>descrption:{descrption} </h3>
      <button onClick={(event) => deletHand(event, id)} className="xxx">
        Delet
      </button>
    </div>
  );
};

export default Card;
