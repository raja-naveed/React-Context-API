import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./actions";

const Counter = ({ count, increment, decrement }) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-white mb-8 tracking-wider">
        Let's Count!
      </h1>
      <div className="relative w-64 h-64">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <p className="text-9xl font-bold text-white">{count}</p>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2013/07/13/10/41/rocket-157444_960_720.png"
          alt="rocket"
          className="w-64 h-64 absolute top-0 left-0 transform -rotate-45 animate-rocket"
        />
      </div>
      <div className="flex items-center mt-8">
        <button
          className="text-4xl text-white bg-yellow-400 w-20 h-20 rounded-full mr-8 focus:outline-none"
          onClick={decrement}
        >
          -
        </button>
        <button
          className="text-4xl text-white bg-green-400 w-20 h-20 rounded-full focus:outline-none"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
