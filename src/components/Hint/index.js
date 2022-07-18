import React from "react";

function Hint({ index, text }) {
  return (
    <li className={getClass(index)} id={`checklist${index}`} key={index}>
      <label className={"hint-list-item"} htmlFor={index}>
        {text.hint}
      </label>
      <input
        className="hint-Checkbox"
        name={index}
        type="checkbox"
        id={`checkbox${index}`}
        onClick={() => nextHint(index)}
      ></input>
    </li>
  );
}

//Helper Function
function nextHint(currIndex) {
  if (
    currIndex ===
    document.querySelector(".list-of-hints").childNodes.length - 1
  ) {
    return;
  }
  let checkBox = document.getElementById(`checkbox${currIndex}`);
  let list = document.getElementById(`checklist${currIndex + 1}`);
  if (checkBox.checked === true) {
    list.classList.remove("hidden");
  } else {
    list.classList.add("hidden");
  }
}

//Helper Function
function getClass(index) {
  if (index === 0) {
    return;
  }
  return "hidden";
}
export default Hint;
