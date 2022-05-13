import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "../style/homepage.css";
import img1 from "../images/more.png";
import like from "../images/Like.png";
import dislike from "../images/Dislike.png";
let linkres = "Z10iWqkOlW4";
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

function randNum(num) {
  return Math.floor(Math.random() * num);
}

function Homepage() {
  const [ids, setIds] = useState([]);
  const [link, setLink] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/videosid");
      const jsonRes = await res.json();
      setIds(jsonRes);
    };
    fetchData();
  }, []);

  const selectRandom = () => {
    let result = 0;
    for (i = 0; i < randNum(50); i++) {
      result = i;
    }
    linkres = ids[result];
    setLink(linkres);
  };

  function testbutton() {
    selectRandom();
    console.log(linkres);
  }

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
            url={`https://www.youtube.com/watch?v=${linkres}`}
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
            <p onClick={testbutton}>RANDOM !</p>
          </ul>
        </div>
      </div>
      {/* END BODY */}
    </>
  );
}

export default Homepage;
