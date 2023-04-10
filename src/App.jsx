import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/Signup";

import { auth } from "./firebase";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home name={userName} />} />
        </Routes>
    </div>
  );
}

export default App;