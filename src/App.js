import React, { useState } from "react";
import Values from "values.js";
import "./App.css";

// Import color components
import Header from "./components/header/Header";
import Palette from "./components/palette/Palette";

const App = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [range, setRange] = useState(5);
  const [list, setList] = useState(new Values("#f15025").all(range));

  //Submit inputed color
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(range);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className='app'>
      <Header
        color={color}
        setColor={setColor}
        error={error}
        range={range}
        setRange={setRange}
        handleSubmit={handleSubmit}
      />

      <div className="title">
        <h2>Hex Color variants for Designers and Artists</h2>
        <p>
          Hex.io is a free and open source platform for developers to instantly get variants of hex colors
        </p>
      </div>

      <div className='palette-section'>
        {list.map((color, index) => {
          return (
            <Palette
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
