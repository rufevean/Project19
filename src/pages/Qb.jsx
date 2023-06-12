
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Qb() {
  const [showEssay, setShowEssay] = useState(false);
  const [hideButton, setHideButton] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (event) => {
    const answer = event.target.value.toLowerCase();

    if (answer === "the purge") {
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
      <div className="Qb">First Movie?</div>
      <input type="text" id="q1text"placeholder="hint : thriller" onChange={handleInputChange} onKeyPress={handleKeyPress} />
      <label htmlFor="q1text"></label>

      {showPopup && (
        <div className="fat-popup">
          <p>Fat</p>
        </div>
      )}

      {showEssay && <div className="q-essay">its the purge, you are correct . tbh i dont rememeber the plot but two movies that i loved watching with you are ' me before you ' and 'ps i love you' . i am not into movies or any kinda of series but i liked them cause i watched them with you .over to the next letter, see ya.</div>}

      {hideButton && (
        <button className="q-button">
          <NavLink to="/qc">next</NavLink>
        </button>
      )}
    </div>
  </div>
);
}

