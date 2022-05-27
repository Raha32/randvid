import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ReactPlayer from "react-player";
import "../style/homepage.css";
import like from "../images/Like.png";
import dislike from "../images/Dislike.png";
//import jsonfile from "./videosid.json";
let VideoLink = "Z10iWqkOlW4";
let i = 0;
//could add a tutorial on how to use randvid but this video seems more fitting

//This is just the navbar button for the phone version

function Homepage() {
  const [IDs, setIDs] = useState([]);
  const [History, setHistory] = useState([]);
  const [Empty, setEmpty] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      //If localstorage is empty fetch videos from youtube
      if (!localStorage.getItem("VideosID")) {
        //setting up the video ids
        const res = await fetch("http://localhost:4000/videosid");
        const jsonRes = await res.json();
        setIDs(jsonRes);
        console.log("100 quotas lost");
      } else {
        //else we get back the videos from localstorage
        let res = localStorage.getItem("VideosID");
        res = res.split(",");
        setIDs(res);
      }
    };
    const fetchHistory = () => {
      if (!localStorage.getItem("HistoryIDs")) {
        return;
      } else {
        let res = localStorage.getItem("HistoryIDs");
        res = res.split(",");
        setHistory(res);
      }
    };
    fetchData();
    fetchHistory();
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
      localStorage.setItem("VideosID", IDs);
      localStorage.getItem("VideosID");
    }
  }
  DBisSet();
  function GetVideosID() {
    if (IDs.length === 0) {
      console.log("empty");
      localStorage.setItem("VideosID", IDs);
      setEmpty(randNum(9999999999));
    } else {
      Randomizer();
      console.log(IDs);
      console.log("Not empty: ", IDs.length);
    }
  }
  function remove(arr, value) {
    return arr.filter(function (ele) {
      //Will return every value that is not the same as the element.
      return ele !== value;
    });
  }
  function HistoryManager(TempHistory) {
    TempHistory = [];

    TempHistory.push(VideoLink);
    setHistory([...History, ...TempHistory]);
    localStorage.setItem("HistoryIDs", History);
    localStorage.getItem("HistoryIDs");
    console.log(History);
  }
  function Randomizer() {
    let RandomID = 0;
    for (i = 0; i < randNum(IDs.length); i++) {
      RandomID = i;
    }
    VideoLink = IDs[RandomID];
    setIDs(remove(IDs, VideoLink));
    HistoryManager(VideoLink);
    localStorage.setItem("VideosID", IDs);
    console.log("Actual video :", VideoLink);
  }
  return (
    <>
      <Navbar />
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
            <p onClick={GetVideosID}>RANDOM !</p>
          </ul>
        </div>
      </div>
      {/* END BODY */}
    </>
  );
}

export default Homepage;
