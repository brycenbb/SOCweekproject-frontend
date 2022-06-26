import React from 'react';

//Props: src -> Image source given from Home component. Image source is found in Assets folder
function Button({ src }) {
  return (
    <div className="Panic" aria-label="Button to trigger help timer">
      <img title="Panic Button" alt="Panic Button" src={src}></img>
    </div>
  );
}

export default Button;
