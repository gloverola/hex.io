import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {IoIosCopy} from 'react-icons/io'
import "react-toastify/dist/ReactToastify.css";
import "./palette.css";

const Palette = ({ rgb, index, hexColor }) => {
  const [alert, setAlert] = useState(false);

  // Set rgb value to be inputed
  const color = rgb.join(",");

  // Set hex value
  const hexValue = `#${hexColor}`;

  toast.configure()

  //Copy hex color to clipboard
  const copyToClipboard = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
    toast.success("Copied to clipboard", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
    });

    
  };

  // Set timeout for pop-up after copying to clipboard
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
   
      <article
        className={`color ${index > 10 && "color-light"}`}
        style={{
          backgroundColor: `rgb(${color})`,
          height: "200px",
          width: "200px",
        }}
      >
        <p>{hexValue}</p>
        <IoIosCopy className={`copy ${index > 10 && "copy-light"}`} onClick={copyToClipboard} />
      </article>
  );
};

export default Palette;
