import { useState } from "react";
import "./SideBar.css";
import SideToggle from "./SideToggle";
import SideItem from "./SideItem";

function SideBar({ isMobile }) {
  const [expandMobileSide, setExpandMobileSide] = useState(false);

  if (!isMobile && expandMobileSide) setExpandMobileSide(false);

  const toggleSideBar = () => setExpandMobileSide(!expandMobileSide);

  return (
    <div
      className={`side-bar ${isMobile && "side-bar--mobile"} ${
        isMobile && !expandMobileSide && "collapsed"
      }`}
    >
      {isMobile && (
        <SideToggle onClick={toggleSideBar} expanded={expandMobileSide} />
      )}
      <ul>
        <SideItem name="Uppgift 2" url="#" />
        <SideItem name="Uppgift 3" url="#" />
      </ul>
    </div>
  );
}

export default SideBar;
