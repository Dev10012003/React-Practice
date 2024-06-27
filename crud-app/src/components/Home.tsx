import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface IUser {
  id: number;
  title: string;
  category: string;
  price: number;
  stock: number;
}
function Home() {
  const [data, setData] = useState<IUser[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id: any) => {
    const confim = window.confirm("..... Delete ?");
    if (confim) {
      axios.delete("https://dummyjson.com/products/" + id).then((res) => {
        navigate("/");
      });
    }
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light">
      <h1>List of Users</h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          <Link to={"/create"} className="btn btn-success">
            Add +
          </Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user: IUser) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.price}</td>
                <td>{user.stock}</td>
                <td>{user.category}</td>
                <td>
                  <Link
                    to={"/read/" + user.id}
                    className="btn btn-sm btn-info me-2"
                  >
                    Read
                  </Link>
                  <Link
                    to={"/update/" + user.id}
                    className="btn btn-sm btn-primary me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={(e) => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
