import { CiAt } from "react-icons/ci";
import { LuUserCircle2 } from "react-icons/lu";
import { MdOutlineNotificationsActive } from "react-icons/md";

const Navbar = ()=> {

  return (
    <>
      <div className="navbar">
        <div className="navbar-up">
          <h2><CiAt/>Biométricos <MdOutlineNotificationsActive/></h2>
          <h4> John Doe -Agente- <LuUserCircle2/></h4>
        </div>
        <div className="navbar-down">
          <label>Estado del folio</label>
          <progress id="file" max="100" value="70">70%</progress>
          <label>50%</label>
        </div>
      </div>
    </>
  );
};

export default Navbar;
