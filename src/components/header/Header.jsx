import React from "react";
import "./header.css";
import { AiFillGithub } from "react-icons/ai";


const Header = ({ color, handleSubmit, error, setColor }) => {


  
  return (
    <header className='header'>
      <h3 className='logo'>hex.io</h3>
      <div className='header-input'>
        

        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='Input hex code here...'
            className={error ? "error" : "hex-input"}
          />

          <button type='submit'>Submit</button>
        </form>
      </div>
      <div className='external-links'>
        <a
          href='https://github.com/gloverola/hex.io'
          target='\_blank'
          noopener
          noreferrer
          className='github'
        >
          <AiFillGithub />
        </a>
      </div>
    </header>
  );
};

export default Header;
