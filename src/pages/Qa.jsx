
import { useState } from "react";
import { NavLink } from "react-router-dom";
import '../styles/homepage.css'

export default function Qa() {
  const [showEssay, setShowEssay] = useState(false);
  const [hideButton, setHideButton] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (event) => {
    const answer = event.target.value.toLowerCase();

    if (answer === "5 august") {
      setShowEssay(true);
      setHideButton(true);
      setShowPopup(false);
    } else {
      setShowEssay(false);
      setHideButton(false);
      setShowPopup(true);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleInputChange(event);
    }
  };

  return (
    <div className="wrapper">
    <div className="question">
      <div className="Qa">The Day When We met</div>
      <input type="text" id="q1text" onChange={handleInputChange} placeholder="example : 6 may" onKeyPress={handleKeyPress} />
      <label htmlFor="q1text"></label>

      {showPopup && (
        <div className="fat-popup">
          <p>FAT</p>
        </div>
      )}

      {showEssay && <div className="q-essay">Yea, its on sophie's bday . I still remember the red decoration and the cake you bought for her.A random moment in those days that i remember is the time when you entered my world for getting thoe anemo flowers for rosaria and we talked for hours just there and the time i went to have a haircut and you were getting ready for your college, thats the first time i ever saw fat pig .thats it for this letter, more on the next one, goodluck for your next question.</div>}

      {hideButton && (
        <button className="q-button">
          <NavLink to="/qb">next</NavLink>
        </button>
      )}
    </div>
    </div>
  );
}

