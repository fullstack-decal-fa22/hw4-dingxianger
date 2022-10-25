import React from 'react';
import { useState } from "react";
import Color from "/Users/xianger/Desktop/cs198-99/hw4-dingxianger/src/Components/Color";
/* Add any imports you think you might need here! */

const Menu = (props) => {

  const handleClick1 = props.addBlocks;

  return (
    <div className="colorOptions">
      <Color color="red" handleClick={handleClick1}/>
      <Color color="pink" handleClick={handleClick1}/>
      <Color color="blue" handleClick={handleClick1}/>
      <Color color="green" handleClick={handleClick1}/>
    </div>
  );
}

export default Menu;