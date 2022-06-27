import './App.css';
import PanicButton from '../PanicButton/index.js';
import Resources from '../Resources/index.js';
import Settings from '../Settings/index.js';
import ProtectedRoute from '../ProtectedRoute';
import Home from '../Home/index.js';
import Diary from '../Diary';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

/*
  This component serves all of the routes of the application. It keeps track of if a user is logged 
  in or not through the use of the user state. 
  The user state is used to dicate whether the log in or log out buttons are used inside of 
  the Settings and Home components. It is also used as a base of information
  for the Diary component.

  Note: Certain routes are protected from being accessed unless a guest is logged in.
  This is handled through Auth0 directly and not through the user state.

*/
function App() {
  const [user, setUser] = useState({});
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home user={user} setUser={setUser} />}
        ></Route>
        <Route
          path="/settings"
          element={
            <ProtectedRoute user={user} component={Settings}></ProtectedRoute>
          }
        ></Route>
        <Route
          path="/diary"
          element={
            <ProtectedRoute user={user} component={Diary}></ProtectedRoute>
          }
        ></Route>
        <Route path="/resources" element={<Resources header={true} />}></Route>
        <Route path="/panic1" element={<PanicButton />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
