import React from 'react';

function nextHint(index) {
  if (index === document.querySelector('.listofhints').childNodes.length - 1) {
    return;
  }
  let checkBox = document.getElementById(`checkbox${index}`);
  let list = document.getElementById(`checklist${index + 1}`);
  if (checkBox.checked === true) {
    list.classList.remove('hidden');
  } else {
    list.classList.add('hidden');
  }
}

function getClass(index) {
  if (index === 0) {
    return;
  }
  return 'hidden';
}
function Hint({ index, text }) {
  return (
    <li className={getClass(index)} id={`checklist${index}`} key={index}>
      <label className={'hintlistitem'} htmlFor={index}>
        {text.hint}
      </label>
      <input
        className="hintCheckbox"
        name={index}
        type="checkbox"
        id={`checkbox${index}`}
        onClick={() => nextHint(index)}
      ></input>
    </li>
  );
}

export default Hint;
