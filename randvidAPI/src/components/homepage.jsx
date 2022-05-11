import React from "react";
import ReactPlayer from "react-player";
import "../style/homepage.css";
import img1 from "../images/more.png";
import like from "../images/Like.png";
import dislike from "../images/Dislike.png";

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
    <>
      {/*NAVBAR*/}
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
      {/*END NAV*/}
      {/*BODY */}
      <div className="flex-content">
        <div className="reminder">
          <p>
            Click the <b>random</b> button to get a random short video !
          </p>
        </div>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=_oaIpAvsEaQ"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
        <div className="controlbar">
          <ul className="test">
            <li>
              <img src={like}></img>
            </li>
            <li>
              <img src={dislike}></img>
            </li>
            <p>RANDOM !</p>
          </ul>
        </div>
      </div>
      {/* END BODY */}
    </>
  );
}

export default Homepage;
