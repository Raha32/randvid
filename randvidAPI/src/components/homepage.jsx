import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "../style/homepage.css";
import img1 from "../images/more.png";
import like from "../images/Like.png";
import dislike from "../images/Dislike.png";
import jsonfile from "./videosid.json";

//could add a tutorial on how to use randvid but this video seems more fitting
let linkres = "Z10iWqkOlW4";

//This is just the navbar button for the phone version
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
  const [check, setCheck] = useState();

  useEffect(() => {
    const resetcheck = () => {
      if (check >= 0) {
        setCheck(0);
        console.log("check has been reset");
      }
      resetcheck();
    };
    const fetchData = async () => {
      //setting up the video ids
      const res = await fetch("http://localhost:3000/videosid");
      const jsonRes = await res.json();
      setIds(jsonRes);
      //setting up the local database
      localStorage.setItem("VideosID", ids);
    };

    const localfetchData = () => {
      //setting up the video ids
      setIds(jsonfile);
      //setting up the local database
      localStorage.setItem("VideosID", ids);
    };

    const saveData = () => {
      //puttin them in localstorage
      let data = localStorage.getItem("VideosID");
      data = data.split(",");
      setLocalData(data);
    };
    let item = localStorage.getItem("VideosID");
    if (item.length == 0) {
      // if our local database is empty we fetch it from youtube
      fetchData();
      saveData();
      console.log("Fetching data from youtube...");
    } else {
      //else we just keep using our local database
      localfetchData();
      saveData();
      console.log("Using local data for video id's...");
    }
    const checkHistory = () => {
      localhistory = localStorage.getItem("HistoryID");
      if (localhistory != "") {
        localhistory = localhistory.split(",");
        setHistory(localhistory);
      }
    };
    checkHistory();
  }, [check]);

  const checklocal = () => {
    let index = 0;
    if (localStorage.getItem("VideosID").length == 0) {
      console.log("Local database is now empty");
      setCheck((index += 1));
    }
  };
  const selectRandom = () => {
    let result = 0;
    // result is initiazied, we loop it until it reaches a certain number
    for (i = 0; i < randNum(localdata.length); i++) {
      result = i;
    }
    //and we give the string of id it wants
    linkres = localdata[result];
    //and we delete it from the local database and add it to our history.
    setLocalData(remove(localdata, linkres));
    localStorage.setItem("VideosID", localdata);
    addHistory(localdata[result]);
    checklocal();
    setLink(linkres);
  };

  function remove(arr, value) {
    return arr.filter(function (ele) {
      return ele != value;
    });
  }

  const addHistory = (data, tempHistory = []) => {
    tempHistory.push(data);
    setHistory([...history, ...tempHistory]);
    localStorage.setItem("HistoryID", history);
    localStorage.getItem("HistoryID");
  };

  function testbutton() {
    //this was supposed to be a test but oh well
    selectRandom();
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
              <a href="">Account</a>
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
