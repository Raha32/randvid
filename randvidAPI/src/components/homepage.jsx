import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "../style/homepage.css";
import img1 from "../images/more.png";
import like from "../images/Like.png";
import dislike from "../images/Dislike.png";
//could add a tutorial on how to use randvid but this video seems more fitting
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
  const [localdata, setLocalData] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //setting up the video ids
      const res = await fetch("http://localhost:3000");
      const jsonRes = await res.json();
      setIds(jsonRes);
      //setting up the local database
      localStorage.setItem("VideosID", ids);
    };

    const saveHistory = () => {
      //We add in there the videos that have been watched
      let historyData = localStorage.getItem("HistoryID");
      historyData = historyData.split(",");
      setHistory(historyData);
    };

    const saveData = () => {
      //puttin them in localstorage
      let data = localStorage.getItem("VideosID");
      data = data.split(",");
      setLocalData(data);
    };
    if (localdata[0] == null) {
      // if our local database is empty we fetch it from youtube
      fetchData();
      saveData();
      console.log("Fetching data from youtube...");
    } else {
      //else we just keep using our local database
      console.log("Using local data for video id's...");
    }
  });

  const selectRandom = () => {
    let result = 0;
    // result is initiazied, we loop it until it reaches a certain number
    for (i = 0; i < randNum(50); i++) {
      result = i;
    }
    //and we give the string of id it wants
    linkres = localdata[result];
    //and we delete it from the local database and add it to our history.
    let historydata = [];
    historydata == historydata.push(localdata[result]);
    console.log(historydata);
    localStorage.setItem("HistoryID", historydata);
    console.log("deleted", localdata[result]);
    setLink(linkres);
  };

  function testbutton() {
    //this was supposed to be a test but oh well
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
