
import React, { useState } from 'react';

const ColorPicker = () => {
  const [firstColor, setFirstColor] = useState('#ff0000');
  const [secondColor, setSecondColor] = useState('#000000');
  const [colors, setColors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStyle = { backgroundImage: `linear-gradient(${firstColor}, ${secondColor})` };

    let newBlend = {
      firstColor,
      secondColor,
      style: newStyle,
    };

    setColors((prevColors) => [...prevColors, newBlend]);
  };

  return (
    <>
      <h1>Color Picker</h1>

      <h2>Choose Two Colors</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="favcolor">Select your favorite color: </label>
        <input
          type="color"
          id="firstColor"
          name="firstColor"
          value={firstColor}
          onChange={(e) => setFirstColor(e.target.value)}
        />
        <input
          type="color"
          id="secondColor"
          name="secondColor"
          value={secondColor}
          onChange={(e) => setSecondColor(e.target.value)}
        />

        <input type="submit" />
      </form>

      <h2>Your color choices here</h2>
      <ul>
        {colors.map((color, index) => (
          
          <li key={index}>
            <p>Color A: {color.firstColor}</p>
            <p>Color B: {color.secondColor}</p>
            <div style={{ height: '100px', width: '100px', ...color.style }}></div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ColorPicker;
