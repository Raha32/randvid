import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "../style/homepage.css";
import img1 from "../images/more.png";
import like from "../images/Like.png";
import dislike from "../images/Dislike.png";
import jsonfile from "./videosid.json";
let VideoLink = "Z10iWqkOlW4";
//could add a tutorial on how to use randvid but this video seems more fitting

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

function Homepage() {
  const [IDs, setIDs] = useState([]);
  const [Empty, setEmpty] = useState(0);
  useEffect(() => {
    const fetchData = () => {
      if (!localStorage.getItem("VideosID")) {
        //setting up the video ids
        setIDs(jsonfile);
        console.log("100 quotas lost");
      } else {
        let res = localStorage.getItem("VideosID");
        console.log(res);
      }
    };
    fetchData();
  }, [Empty]);
  function randNum(num) {
    return Math.floor(Math.random() * num);
  }

  function DBisSet() {
    if (!localStorage.getItem("VideosID")) {
      VideosDB();
    } else {
      return;
    }
    function VideosDB() {
      console.log("Setting up LocalStorage");
      localStorage.setItem("VideosID", JSON.stringify(IDs));
      localStorage.getItem("VideosID");
    }
  }
  DBisSet();
  function GetVideosID() {
    if (IDs.length <= 1) {
      console.log("empty");
      setEmpty(randNum(9999999999));
    } else {
      console.log(IDs);
      console.log("Not empty");
      return;
    }
  }
  function remove(arr, value) {
    return arr.filter(function (ele) {
      //Will return every value that is not the same as the element.
      return ele !== value;
    });
  }
  function Randomizer() {
    GetVideosID();
    let RandomID = 0;
    for (i = 0; i < randNum(IDs.length); i++) {
      RandomID = i;
    }
    VideoLink = IDs[RandomID];
    setIDs(remove(IDs, VideoLink));
    localStorage.setItem("VideosID", IDs);
    console.log("Actual video :", VideoLink);
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
              <img
                onClick={btnfunction}
                className="dropbtn"
                src={img1}
                alt="NavBar Button"
              ></img>
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
            url={`https://www.youtube.com/watch?v=${VideoLink}`}
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
        <div className="controlbar">
          <ul className="test">
            <li>
              <img src={like} alt="Like"></img>
            </li>
            <li>
              <img src={dislike} alt="Dislike"></img>
            </li>
            <p onClick={Randomizer}>RANDOM !</p>
          </ul>
        </div>
      </div>
      {/* END BODY */}
    </>
  );
}

export default Homepage;
