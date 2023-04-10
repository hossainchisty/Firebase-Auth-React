import React from "react";
import { Navbar } from "./NavBar";

function Home(props) {
  return (
    <div>
      <Navbar />

      <h2 className="text-3xl font-bold text-red-300">
        {props.name ? `Welcome - ${props.name}` : "Login please"}
      </h2>
    </div>
  );
}

export default Home;
