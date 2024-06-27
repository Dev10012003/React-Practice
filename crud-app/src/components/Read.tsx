import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
interface IUser {
  id: number;
  title: string;
  category: string;
  price: number;
  stock: number;
}
function Read() {
  const [data, setData] = useState<IUser>();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);
  return (
    <div>
      <h1>Product</h1>
      <h4>{data?.title}</h4>
      <h4>{data?.category}</h4>
      <h4>{data?.price}</h4>
    </div>
  );
}

export default Read;
