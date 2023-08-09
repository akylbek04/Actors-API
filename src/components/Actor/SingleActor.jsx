import "./SingleActor.css";
import { ToolTipCustom } from "../ToolTip/ToolTipCustom";
import { ModalEffect } from '../Modal/Modal';

export const SingleActor = ({ profile_path, name, popularity, known_for}) => {
    // console.log(known_for)
  const id = name.split(' ').join('') 
  return (
    <div id={id} className="card">
      <img
        src={`https://image.tmdb.org/t/p/w185${profile_path}`}
        className=" img-fluid rounded"
        alt={`${name} pic`}
      />
      <div className="card-text">{name}</div>
      <button className="favBtn">
        <i id="favIcon" className="fa-solid fa-heart"></i>
      </button>
      <button className="popBtn">
        <i id="popId" className="fa-solid fa-fire">
          {popularity.toFixed(0)}
        </i>
      </button>
      <ModalEffect args={known_for} name={name} />
      <ToolTipCustom id={id} name={name} info={known_for} />
    </div>
  );
};
