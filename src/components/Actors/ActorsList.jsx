import "./ActorsList.css";
import { SingleActor } from "../Actor/SingleActor";

export const ActorsList = ({ data }) => {
//   console.log(data.id)
  return (
    <div className="container-fluid">
      {data.map(actor => {
        return(
            <SingleActor {...actor} key={actor.id} />
        )
      })}
    </div>
  );
};
