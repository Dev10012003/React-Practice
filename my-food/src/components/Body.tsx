import "./Body.css";
import RestCard from "./RestCard";
import { IRestList, restList } from "../utils/dummyData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Body() {
  const [listofrestaurents, setlistofrestaurents] = useState<IRestList[]>([]);
  const [filtedlistofrestaurents, setFilteredlistofrestaurents] = useState<
    IRestList[]
  >([]);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setlistofrestaurents(restList);
    setFilteredlistofrestaurents(restList);
  };

  if (listofrestaurents.length === 0) {
    console.log("loading");
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div className="search">
        <input
          type="text"
          style={{ fontSize: 25 }}
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
            console.log(searchText.length);
            if (searchText.length == 1) {
              setFilteredlistofrestaurents(restList);
            }
          }}
        ></input>
        <button
          style={{ fontSize: 25, marginLeft: 5 }}
          onClick={() => {
            const searchedList = listofrestaurents.filter((res) =>
              res.cuisine.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredlistofrestaurents(searchedList);
          }}
        >
          Search
        </button>
        <button
          style={{ fontSize: 25, marginLeft: 10 }}
          onClick={() => {
            const filteredlist = listofrestaurents.filter(
              (res) => res.rating > 4.5
            );
            console.log(filteredlist);
            setFilteredlistofrestaurents(filteredlist);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {filtedlistofrestaurents.map((restaurent) => (
          <Link key={restaurent.id} to={"/restaurents/" + restaurent.id}>
            <RestCard resData={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
