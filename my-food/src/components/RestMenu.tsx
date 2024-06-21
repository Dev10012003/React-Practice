import React, { useEffect, useState } from "react";
import { restMenu, IRestMenu, restList } from "../utils/dummyData";
import { useParams } from "react-router-dom";

const RestMenu = () => {
  const [menu, setMenu] = useState<IRestMenu>();

  const { id } = useParams<string>();

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = () => {
    const getData = restMenu.filter((item) => item.id === id);
    console.log(getData);
    setMenu(getData[0]);
  };
  return (
    <div>
      <h1>{menu?.resName}</h1>
      <h2>Menu</h2>
      <ul>
        {menu?.menu.map((item, index) => {
          return (
            <li key={index}>
              {item.itemName} - {item.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestMenu;
