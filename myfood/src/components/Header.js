import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div>
        <img src={"/myfood.png"} className="logo" alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
