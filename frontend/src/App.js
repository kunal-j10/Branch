import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";

function App() {
 
  // State to track LoggedIn state of an Agent
  const [isLoggedIn, setLoggedIn] = useState(false);
  
  return (
    <Routes>
      <Route path="/" exact element={<Login setLoggedIn={setLoggedIn} />} />
      {isLoggedIn && <Route path="/dashboard" element={<Dashboard />}></Route>}
      <Route path="/signup" element={<Signup setLoggedIn={setLoggedIn} />} />
    </Routes>
  );
}

export default App;
