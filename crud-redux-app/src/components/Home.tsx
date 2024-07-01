import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./UserReducer";

interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface RootState {
  users: IUser[];
}

function Home() {
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteUser({ id: id }));
  };

  console.log(users);
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
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: IUser) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>
                  <Link
                    to={"/update/" + user.id}
                    className="btn btn-sm btn-primary me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(user.id)}
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
