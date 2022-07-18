import React, { useState, useEffect } from 'react';
import pic from '../../Assets/dont-panic-stars.png';

function Panic3({ state }) {
  const [helpers, setHelpers] = useState([{ slackusername: '' }]);
  useEffect(() => {
    async function fetchHelpers() {
      let response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/help?topic=${state.topic}`
      );
      let json = await response.json();
      let dataArr = json.data;
      setHelpers(dataArr);
    }
    fetchHelpers();
  }, [state.topic]);

  return (
    <main
      style={{
        color: 'white',
        backgroundImage: `url(${pic})`,
        backgroundSize: 'cover',
      }}
      className="main-panic3"
    >
      <div className="problem-request">
        <p>{`Hello I've been working on ${state.topic}`}</p>
        <p>{`The problem is ${state.problem}`}</p>
        <p>{`I've tried ${state.tried}`}</p>
      </div>

      <section className="problem-helpers">
        {helpers.map((item, index) => {
          return <p key={index}>{item.slackusername}</p>;
        })}
      </section>
    </main>
  );
}

export default Panic3;
