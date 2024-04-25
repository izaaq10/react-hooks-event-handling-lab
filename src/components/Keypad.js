// Code Keypad Component Here
import React, { useState } from "react";
function Keypad() {
  const [password, setPassword] = useState("");
  function handlePassword(event) {
    setPassword(event.target.value);
    console.log("Entering password...");
  }
  function handleButtonClick(number) {
    setPassword(prevPassword => prevPassword + number);
    console.log(password)
  }
  const buttonGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '10px',
    maxWidth: '50%',
    margin:'0 5px'
  };
  const inputStyle = {
    maxWidth:"100%",
    width:"50%",
    color: 'white',
    backgroundColor: 'grey',
    fontSize: '24px',
    margin:'10px 0',
    height:'80px'

  }


  return (
    <div>
      <input style={inputStyle}
        type="password"
        value={password}
        id="password"
        placeholder="Enter password"
        minLength={8}
        onChange={handlePassword}
      />
      <div style={buttonGridStyle}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "#"].map((number) => (
        <button  style={buttonStyle} key={number} onClick={() => handleButtonClick(number)}>
          {number}
        </button>
      ))}
       <button style={buttonStyle} onClick={handlePassword}> Enter</button>
      </div>
    </div>
  );
}
export const buttonStyle = {
    fontSize: '24px',
    padding: '10px',
    width: '100%',
    backgroundColor:'blue',
    color: 'white',
  };

export default Keypad;