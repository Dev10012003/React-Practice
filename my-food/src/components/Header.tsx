import "./Header.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [btnname, setbtnname] = useState<string>("Login");

  useEffect(() => {
    console.log("useeffect called");
  }, [btnname === "Login"]);

  return (
    <div className="header">
      <div>
        <img src={"/myfood.png"} className="logo" alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              btnname == "Login" ? setbtnname("Logout") : setbtnname("Login");
            }}
          >
            {btnname}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
