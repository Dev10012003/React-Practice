import { IRestList } from "../utils/dummyData";
import "./RestCard.css";

interface IRestCardProps {
  resData: IRestList;
}

function RestCard(props: IRestCardProps) {
  return (
    <div className="res-card">
      <div className="res-logo-container">
        <img
          src={"/" + props.resData.image}
          alt="food1"
          className="food-logo"
        ></img>
      </div>
      <h3>{props.resData.resName}</h3>
      <h4>{props.resData.cuisine}</h4>
      <h4>{props.resData.rating} stars</h4>
      <h4>{props.resData.cost} </h4>
      <h4>{props.resData.time} mins</h4>
    </div>
  );
}

export default RestCard;
