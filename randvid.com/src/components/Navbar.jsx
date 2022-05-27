import React from "react";
import { Link } from "react-router-dom";
import img1 from "../images/more.png";
function Navbar() {
  let i = 0;
  function btnfunction() {
    if (i <= 0) {
      document.getElementById("tdropdown").style.display = "block";
      i++;
    } else if (i > 0) {
      document.getElementById("tdropdown").style.display = "none";
      i = 0;
    }
  }
  return (
    <>
      {/*NAVBAR*/}
      <nav>
        <div id="normnav">
          <ul>
            <h1>RandVidz</h1>
            <li className="firstchild">
              <Link to="/History">History</Link>
            </li>
            <li>
              <a href="#Account">Account</a>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <div className="dropdown-content">
            <ul>
              <img
                onClick={btnfunction}
                className="dropbtn"
                src={img1}
                alt="NavBar Button"
              ></img>
              <h1>RandVidz</h1>
              <div id="tdropdown">
                <li className="firstchild">
                  <Link to="/History">History</Link>
                </li>
                <li>
                  <a href="#Account">Account</a>
                </li>
                <li>
                  <Link className="active" to="/">
                    Home
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {/*END NAV*/}
    </>
  );
}

export default Navbar;
