import React from "react";
import "./header.css";

const Header = ({ color, handleSubmit, error, setColor}) => {
  return (
    <header className='header'>
      <h3 className='logo'>hex.io</h3>
      <div className='header-input'>
        <input type='color' className='picker' value={color} />

        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
            className={error ? "error" : "hex-input"}
          />

          <button type='submit'>Submit</button>
          {error && <h2>Cant pass wrong value</h2>}
        </form>
      </div>
    </header>
  );
};

export default Header;
