import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

function Header() {
  const [btnname, setbtnname] = useState<string>("Login");
  const status: boolean = useOnlineStatus();

  useEffect(() => {
    console.log("useeffect called");
  }, [btnname === "Login"]);

  return (
    <div className="flex justify-between bg-gray-200 text-green-700 shadow-md  p-3 ps-6">
      <div>
        <img src={"/myfood.png"} className="w-48" alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-2">
          <li className="px-4 text-xl">
            Online Status : {status === true ? "✅" : "🔴"}
          </li>
          <li className="px-4 text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="px-4 text-xl"
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
