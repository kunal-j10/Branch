import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";

function App() {
   const [isLoggedIn,setLoggedIn]=useState(false);
   const navigate=useNavigate();
  return (
          <Routes>
              <Route path="/" exact element={<Login setLoggedIn={setLoggedIn} />}></Route>
              {isLoggedIn&&<Route path="/dashboard" element={<Dashboard/>}></Route>}
              <Route path="/signup" element={<Signup setLoggedIn={setLoggedIn} />}></Route>

          </Routes>
  );
}

export default App;
