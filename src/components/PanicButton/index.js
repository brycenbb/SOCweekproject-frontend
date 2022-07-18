import { useState } from "react";
import { Link } from "react-router-dom";
import Hints from "../Hints";
import Timer from "../Timer";
import Panic2 from "../Panic2";
import pic from "../../Assets/dont-panic-stars.png";
import Panic3 from "../Panic3";
import "./PanicButton.css";

function PanicButton() {
  const [version, setVersion] = useState(1);
  const [inputValues, setInputValues] = useState({
    topic: "",
    problem: "",
    tried: "",
  });

  if (version === 1) {
    return (
      <main style={{ backgroundImage: `url(${pic})` }} className="panic-main1">
        <div className="panic1-left">
          <Link to="/">Home</Link>
          <div>
            <Timer version={version} setVersion={setVersion} />
          </div>
        </div>
        <div className="panic1-right">
          <Hints></Hints>
        </div>
      </main>
    );
  } else if (version === 2) {
    return (
      <div className="panic-main2">
        <Link to="/">Home</Link>
        <div>
          <Panic2 state={setInputValues}></Panic2>
          Version 2: <Timer setVersion={setVersion} version={version} />
        </div>
      </div>
    );
  } else {
    return <Panic3 state={inputValues}></Panic3>;
  }
}
export default PanicButton;
