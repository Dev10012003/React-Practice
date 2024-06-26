import React from "react";
import { IFormData } from "../utils/dummyData";

interface IFormPorps {
  users: IFormData[];
}

function Formikdata(props: IFormPorps) {
  return (
    <div>
      {props.users.map((user, index) => (
        <div className="p-5 m-5 bg-green-300 ">
          <h1>
            {user.firstName} {user.lastName}
          </h1>
          <h4>{user.email}</h4>
          <h4>{user.phoneNumber}</h4>
          <h4>{user.gender}</h4>
          <h4>{user.city}</h4>
          <h4>{user.birthDate}</h4>
          <h4>{user.password}</h4>
          <h4>{user.confirmPassword}</h4>
          {user.interests.map((interest, index) => (
            <h4>{interest}</h4>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Formikdata;
