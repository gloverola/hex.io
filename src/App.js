import React, { useState } from "react";
import Values from "values.js";

import "./App.css";

// Import color components
import Header from "./components/header/Header";
import Palette from "./components/palette/Palette";
import ColorPicker from "./components/colorPicker/ColorPicker";

const App = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [range, setRange] = useState(5);
  const [list, setList] = useState(new Values("#259ff1").all(range));
  
  const [pickerColor, setPickerColor] = useState("#259ff1");


  //Submit inputed color
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color || pickerColor).all(range);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
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

      <div className='title'>
        <h2>Hex Color variants for Designers and Developers</h2>
        
      </div>

      <div className="container">
        <ColorPicker pickerColor={pickerColor} setPickerColor={setPickerColor} handleSubmit={handleSubmit} />

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
    </div>
  );
};

export default App;
