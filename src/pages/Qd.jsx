import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Q4() {
  const [showEssay, setShowEssay] = useState(false);
  const [hideButton, setHideButton] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (event) => {
    const answer = event.target.value.toLowerCase();

    if (answer === "yes") {
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
      <div className="Qd">forever?</div>
      <input type="text" id="q1text" onChange={handleInputChange} onKeyPress={handleKeyPress} />
      <label htmlFor="q1text"></label>

      {showPopup && (
        <div className="fat-popup">
          <p>you are a fat pig</p>
        </div>
      )}


      {showEssay && <div className="q-essay">alright, you are stuck with me then, you fat cute dumb pig tacuyan, thats it for this quiz, more updates next month, love you </div>}

      {hideButton && (
        <button className="q-button">
          <NavLink to="/">alright,bye</NavLink>
        </button>
      )}
    </div>
    </div>
  );
}
