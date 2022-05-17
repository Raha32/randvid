require("./index.css");
var $ltMAx$reactjsxdevruntime = require("react/jsx-dev-runtime");
var $ltMAx$reactdomclient = require("react-dom/client");
var $ltMAx$react = require("react");
var $ltMAx$reactplayer = require("react-player");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}








var $3fce9ca56d00c66b$exports = {};
$3fce9ca56d00c66b$exports = new URL("more.989f2288.png?" + Date.now(), "file:" + __filename).toString();


var $d05ee018b5d48a0f$exports = {};
$d05ee018b5d48a0f$exports = new URL("Like.09ef6987.png?" + Date.now(), "file:" + __filename).toString();


var $9d8a634167e8f08a$exports = {};
$9d8a634167e8f08a$exports = new URL("Dislike.1e6e10e5.png?" + Date.now(), "file:" + __filename).toString();


//could add a tutorial on how to use randvid but this video seems more fitting
let $b3070e12ac44ceae$var$linkres = "Z10iWqkOlW4";
let $b3070e12ac44ceae$var$i = 0;
function $b3070e12ac44ceae$var$btnfunction() {
    if ($b3070e12ac44ceae$var$i <= 0) {
        document.getElementById("tdropdown").style.display = "block";
        $b3070e12ac44ceae$var$i++;
    } else if ($b3070e12ac44ceae$var$i > 0) {
        document.getElementById("tdropdown").style.display = "none";
        $b3070e12ac44ceae$var$i = 0;
    }
}
function $b3070e12ac44ceae$var$randNum(num) {
    return Math.floor(Math.random() * num);
}
function $b3070e12ac44ceae$var$Homepage() {
    const [ids, setIds] = $ltMAx$react.useState([]);
    const [link, setLink] = $ltMAx$react.useState([]);
    const [localdata, setLocalData] = $ltMAx$react.useState([]);
    $ltMAx$react.useEffect(()=>{
        const fetchData = async ()=>{
            //setting up the video ids
            const res = await fetch("./videosid.json");
            const jsonRes = await res.json();
            setIds(jsonRes);
            //setting up the local database
            localStorage.setItem("VideosID", ids);
        };
        const saveData = ()=>{
            //puttin them in localstorage
            let data = localStorage.getItem("VideosID");
            data = data.split(",");
            setLocalData(data);
        };
        let item = localStorage.getItem("VideosID");
        console.log("localstorage : ", item);
        console.log("localdata : ", localdata);
        if (localdata[0] == null) {
            // if our local database is empty we fetch it from youtube
            fetchData();
            saveData();
            console.log("Fetching data from youtube...");
        } else //else we just keep using our local database
        console.log("Using local data for video id's...");
        const selectRandom = ()=>{
            let result = 0;
            // result is initiazied, we loop it until it reaches a certain number
            for($b3070e12ac44ceae$var$i = 0; $b3070e12ac44ceae$var$i < $b3070e12ac44ceae$var$randNum(50); $b3070e12ac44ceae$var$i++)result = $b3070e12ac44ceae$var$i;
            //and we give the string of id it wants
            $b3070e12ac44ceae$var$linkres = localdata[result];
            //and we delete it from the local database and add it to our history.
            setLink($b3070e12ac44ceae$var$linkres);
        };
    });
    function testbutton() {
        //this was supposed to be a test but oh well
        selectRandom();
    }
    return /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV($ltMAx$reactjsxdevruntime.Fragment, {
        children: [
            /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("nav", {
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("div", {
                        id: "normnav",
                        children: /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("ul", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("h1", {
                                    children: "RandVid"
                                }, void 0, false, {
                                    fileName: "src/components/homepage.jsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("li", {
                                    className: "firstchild",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("a", {
                                        href: "#History",
                                        children: "History"
                                    }, void 0, false, {
                                        fileName: "src/components/homepage.jsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/components/homepage.jsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("li", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("a", {
                                        href: "#Account",
                                        children: "Account"
                                    }, void 0, false, {
                                        fileName: "src/components/homepage.jsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/components/homepage.jsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("li", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("a", {
                                        className: "active",
                                        href: "#Homepage",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "src/components/homepage.jsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/components/homepage.jsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/homepage.jsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/components/homepage.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("div", {
                        className: "dropdown",
                        children: /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("div", {
                            className: "dropdown-content",
                            children: /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("ul", {
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("img", {
                                        onClick: $b3070e12ac44ceae$var$btnfunction,
                                        className: "dropbtn",
                                        src: (/*@__PURE__*/$parcel$interopDefault($3fce9ca56d00c66b$exports))
                                    }, void 0, false, {
                                        fileName: "src/components/homepage.jsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("h1", {
                                        children: "RandVid"
                                    }, void 0, false, {
                                        fileName: "src/components/homepage.jsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("div", {
                                        id: "tdropdown",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("li", {
                                                className: "firstchild",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("a", {
                                                    href: "#History",
                                                    children: "History"
                                                }, void 0, false, {
                                                    fileName: "src/components/homepage.jsx",
                                                    lineNumber: 103,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "src/components/homepage.jsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("li", {
                                                children: /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("a", {
                                                    href: "#Account",
                                                    children: "Account"
                                                }, void 0, false, {
                                                    fileName: "src/components/homepage.jsx",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "src/components/homepage.jsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("li", {
                                                children: /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("a", {
                                                    className: "active",
                                                    href: "#Homepage",
                                                    children: "Home"
                                                }, void 0, false, {
                                                    fileName: "src/components/homepage.jsx",
                                                    lineNumber: 109,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "src/components/homepage.jsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/components/homepage.jsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/homepage.jsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "src/components/homepage.jsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/components/homepage.jsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/components/homepage.jsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("div", {
                className: "flex-content",
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("div", {
                        className: "reminder",
                        children: /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("p", {
                            children: [
                                "Click the ",
                                /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("b", {
                                    children: "random"
                                }, void 0, false, {
                                    fileName: "src/components/homepage.jsx",
                                    lineNumber: 123,
                                    columnNumber: 23
                                }, this),
                                " button to get a random short video !"
                            ]
                        }, void 0, true, {
                            fileName: "src/components/homepage.jsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/components/homepage.jsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("div", {
                        className: "player-wrapper",
                        children: /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV(($parcel$interopDefault($ltMAx$reactplayer)), {
                            className: "react-player",
                            url: `https://www.youtube.com/watch?v=${$b3070e12ac44ceae$var$linkres}`,
                            width: "100%",
                            height: "100%",
                            controls: true
                        }, void 0, false, {
                            fileName: "src/components/homepage.jsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/components/homepage.jsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("div", {
                        className: "controlbar",
                        children: /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("ul", {
                            className: "test",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("li", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("img", {
                                        src: (/*@__PURE__*/$parcel$interopDefault($d05ee018b5d48a0f$exports))
                                    }, void 0, false, {
                                        fileName: "src/components/homepage.jsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/components/homepage.jsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("li", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("img", {
                                        src: (/*@__PURE__*/$parcel$interopDefault($9d8a634167e8f08a$exports))
                                    }, void 0, false, {
                                        fileName: "src/components/homepage.jsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/components/homepage.jsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV("p", {
                                    onClick: testbutton,
                                    children: "RANDOM !"
                                }, void 0, false, {
                                    fileName: "src/components/homepage.jsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/homepage.jsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/components/homepage.jsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/components/homepage.jsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
var $b3070e12ac44ceae$export$2e2bcd8739ae039 = $b3070e12ac44ceae$var$Homepage;


function $86170abfc0122593$var$App() {
    return /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV($ltMAx$reactjsxdevruntime.Fragment, {
        children: /*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV($b3070e12ac44ceae$export$2e2bcd8739ae039, {}, void 0, false, {
            fileName: "src/App.jsx",
            lineNumber: 5,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
var $86170abfc0122593$export$2e2bcd8739ae039 = $86170abfc0122593$var$App;


const $4fa36e821943b400$var$root = ($parcel$interopDefault($ltMAx$reactdomclient)).createRoot(document.getElementById("root"));
$4fa36e821943b400$var$root.render(/*#__PURE__*/ $ltMAx$reactjsxdevruntime.jsxDEV($86170abfc0122593$export$2e2bcd8739ae039, {}, void 0, false, {
    fileName: "src/index.js",
    lineNumber: 7,
    columnNumber: 13
}, undefined));


//# sourceMappingURL=index.js.map
