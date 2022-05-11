import React from "react";
import "../style/homepage.css";
import img1 from "../images/more.png";
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

function Homepage() {
  return (
    <nav>
      <div id="normnav">
        <ul>
          <h1>RandVid</h1>
          <li className="firstchild">
            <a href="#History">History</a>
          </li>
          <li>
            <a href="#Account">Account</a>
          </li>
          <li>
            <a className="active" href="#Homepage">
              Home
            </a>
          </li>
        </ul>
      </div>
      <div className="dropdown">
        <div className="dropdown-content">
          <ul>
            <img onClick={btnfunction} className="dropbtn" src={img1}></img>
            <h1>RandVid</h1>
            <div id="tdropdown">
              <li className="firstchild">
                <a href="#History">History</a>
              </li>
              <li>
                <a href="#Account">Account</a>
              </li>
              <li>
                <a className="active" href="#Homepage">
                  Home
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Homepage;
