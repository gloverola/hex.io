import React from 'react'
import { HexColorPicker } from "react-colorful";
import "react-colorful/dist/index.css";
import './picker.css'

const ColorPicker = ({ pickerColor, setPickerColor, handleSubmit}) => {
    return (
      <div className='picker-container'>
        <p className='picker' style={{ background: `${pickerColor}` }}>
          {pickerColor}
        </p>
        <HexColorPicker color={pickerColor} onChange={setPickerColor} />
        <button
            onClick={handleSubmit}
          className='picker-button'
        >Submit</button>
      </div>
    );
}

export default ColorPicker
