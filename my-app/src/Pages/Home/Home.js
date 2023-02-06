import React from "react";
import "./Home.css";
export const Home = () => {
  return (
    <div className="home-container">
      <div>
        <h1 className="home-heading"> Tik Tak Toe!</h1>
        <p>
          Welcome to Tik tak toe. Before you get started enter your names below.
          Once entered press submit and get going! May the best player win ...
        </p>

        <a href="/game"> Start game!</a>
      </div>

      <div className="player-container">
        <div className="player-one-container">hi</div>

        <div className="player-two-container">hi</div>
      </div>
    </div>
  );
};
