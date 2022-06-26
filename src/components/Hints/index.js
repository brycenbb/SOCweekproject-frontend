import React from 'react';
import Hint from '../Hint';
import hintList from './hintList';

function Hints() {
  return (
    <div className="hints">
      <ol className="listofhints">
        {hintList.map((hint, index) => {
          return <Hint key={index} index={index} text={hint}></Hint>;
        })}
      </ol>
    </div>
  );
}

export default Hints;
