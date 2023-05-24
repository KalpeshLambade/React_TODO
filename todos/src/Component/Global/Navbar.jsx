import React from "react";
import "../Global/style.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-l">
          <div>LOGO</div>
          <div>HOME</div>
          <div>TASK</div>
          <div>USER</div>
        </div>
        <div className="nav-r"></div>
      </nav>
    </>
  );
};

export default Navbar;
