import React from "react";
import { Link } from "react-router-dom";

const MovieCard = () => {
  return (
    <div className="card">
      <Link style={{textDecoration: 'none' ,color: 'black'}} to='/'>
        <img src='https://www.rojgargyaan.com/wp-content/uploads/2022/08/sita-raman-flop-640x853.jpg' alt="pushpy makes me cry" />
        <span>Sita Raman</span>
      </Link>
    </div>
  );
};

export default MovieCard;
