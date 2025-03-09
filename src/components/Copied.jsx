import React from 'react'

const Copied = ({ color }) => { 
    if (!color) return null;   
  
  return (
    <div style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor:"#6d6e70",
        color: "#fff",
        padding: " 15px",
        fontSize: "14px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)"
      }} >
        Copied #{color} to Clipboard
    </div>
  );
};

export default Copied;
