import React from 'react';
import {  Link } from "react-router-dom";


const navbar= () =>{
  return (
  <div>
    <h1>Magic Squares</h1>
    <li>
      <Link to="/goats">Goats</Link>
    </li>
  </div>
  );
}
export default navbar;