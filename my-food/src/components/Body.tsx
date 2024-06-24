import "./Body.css";
import RestCard from "./RestCard";
import { IRestList, restList } from "../utils/dummyData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

function Body() {
  const [listofrestaurents, setlistofrestaurents] = useState<IRestList[]>([]);
  const [filtedlistofrestaurents, setFilteredlistofrestaurents] = useState<
    IRestList[]
  >([]);
  const [searchText, setSearchText] = useState<string>("");
  const onlineStatus = useOnlineStatus();

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

  if (onlineStatus === false) {
    return <h1>Check your internet connection ... 🛜</h1>;
  }

  return (
    <div className="">
      <div className="py-8 px-2 flex">
        <input
          type="text"
          className="border border-solid border-black text-xl rounded-md p-2"
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
          className="bg-orange-400 px-4 text-lg ms-4 rounded-md"
          onClick={() => {
            const searchedList = listofrestaurents.filter((res) =>
              res.cuisine.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredlistofrestaurents(searchedList);
          }}
        >
          🔍 Search
        </button>
        <button
          className="bg-green-600 px-4 text-lg ms-6 rounded-md"
          onClick={() => {
            const filteredlist = listofrestaurents.filter(
              (res) => res.rating > 4.5
            );
            console.log(filteredlist);
            setFilteredlistofrestaurents(filteredlist);
          }}
        >
          Top Rated ⭐
        </button>
      </div>
      <div className="flex flex-wrap justify-items-start">
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
