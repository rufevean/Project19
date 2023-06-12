import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Qc() {
  const [showEssay, setShowEssay] = useState(false);
  const [hideButton, setHideButton] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (event) => {
    const answer = event.target.value.toLowerCase();

    if (answer === "positano") {
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
      <div className="Qc">Favorite Destination?</div>
      <input type="text" id="q1text" placeholder="hint : italy" onChange={handleInputChange} onKeyPress={handleKeyPress} />
      <label htmlFor="q1text"></label>

      {showPopup && (
        <div className="fat-popup">
          <p>Fat</p>
        </div>
      )}

      {showEssay && <div className="q-essay">i really hope we can make it so that i can be financial free to move around the world with you.i have many locations in my mind such as going to the svalbard, norway, hokkaido and few more that i dont remember now cause they all have snow and i love snow. once i get through my work and finish my undergraduation, i need to focus on which country to go, most probably its gonna be canada but i still need to reasearch a lot for us. alright, over to the next.</div>}

      {hideButton && (
        <button className="q-button">
          <NavLink to="/qd">next</NavLink>
        </button>
      )}
    </div>
    </div>
  );
}
