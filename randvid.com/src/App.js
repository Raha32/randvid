import Homepage from "./components/homepage";
import History from "./components/history";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/History" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
