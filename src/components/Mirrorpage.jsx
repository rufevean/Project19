import '../styles/mirrorpage.css'
import { NavLink } from 'react-router-dom'
export default function Mirrorpage(){
  return(
  <div className="mirrorpage">
      <div  className="mirror-container">
      <div className="mirror-container-head">WELCOME TO PROJECT 19</div>
      <div className="mirror-container-state1">For every question you answer correct ,you will unlock a message</div>
      <div className="mirror-container-state2">For every question you answer wrong, you will be called fat</div>
      <button className="mirror-container-button"><NavLink to="/qa" > Lets start</NavLink></button>
      </div>
    </div>
  )
}
