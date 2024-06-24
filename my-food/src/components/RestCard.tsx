import { IRestList } from "../utils/dummyData";
import "./RestCard.css";

interface IRestCardProps {
  resData: IRestList;
}

function RestCard(props: IRestCardProps) {
  return (
    <div className="m-5 p-4 w-[300px] bg-gray-200 shadow-md rounded-md hover:shadow-2xl">
      <div className="">
        <img
          src={"/" + props.resData.image}
          alt="food1"
          className="rounded-lg"
        ></img>
      </div>
      <h3 className="font-bold py-2 text-xl">{props.resData.resName}</h3>
      <h4 className=" text-lg">🍽️ {props.resData.cuisine}</h4>
      <h4 className=" text-lg">⭐ {props.resData.rating}stars</h4>
      <h4 className=" text-lg">💲 {props.resData.cost} </h4>
      <h4 className=" text-lg">🕛 {props.resData.time} mins</h4>
    </div>
  );
}

export default RestCard;
