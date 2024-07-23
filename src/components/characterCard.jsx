import "../styles/card.css";

export default function Card({ character, index, onclick }) {
  //const {c}
  //console.log(character.img);
  return (
    <>
      <button data-key={character._id} key={index} className="card" onClick={onclick}>
        <img src={`${character.img}`} alt="" />
        <h3>{character.name}</h3>
      </button>
    </>
  );
}
