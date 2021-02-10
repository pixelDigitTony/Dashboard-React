import { BsBell } from "react-icons/bs";
import { BiGridAlt } from "react-icons/bi";
import { VscAdd } from "react-icons/vsc";
import { VscSettingsGear } from "react-icons/vsc";
import { IoExitOutline } from "react-icons/io5";

const Nav = () => {
  return (
    <div className="toolPosition">
      <nav className="toolBar">
        <button className="toolButton">
          <BiGridAlt />
        </button>
        <button className="toolButton">
          <BsBell />
        </button>
        <button className="toolButton">
          <VscAdd />
        </button>
        <button className="toolButton">
          <VscSettingsGear />
        </button>
        <button className="toolButton">
          <IoExitOutline />
        </button>
      </nav>
    </div>
  );
};

export default Nav;
