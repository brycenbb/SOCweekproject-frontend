import "./App.css";
import PanicButton from "../PanicButton/index.js";
import Resources from "../Resources/index.js";
import Settings from "../Settings/index.js";
import ProtectedRoute from "../ProtectedRoute";
import Home from "../Home/index.js";
import Diary from "../Diary";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/*
  This component serves all of the routes of the application. Information on the tech stack can be found
  in the README.
*/
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route
          path="/settings"
          element={<ProtectedRoute component={Settings}></ProtectedRoute>}
        ></Route>

        <Route
          path="/diary"
          element={<ProtectedRoute component={Diary}></ProtectedRoute>}
        ></Route>

        <Route path="/resources" element={<Resources header={true} />}></Route>

        <Route path="/panic1" element={<PanicButton />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
