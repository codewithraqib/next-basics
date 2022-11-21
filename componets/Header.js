import Image from "next/image";
import React from "react";
import MultilevelDropdown from "./MultilevelDropdown";
// import { useHistory } from "react-router-dom";

function Header(props) {
  // let history = useHistory();

  return (
    <div className="header-parent">
      <div className="logo-conntainer">
        <Image src="/images/logo.jpg" alt="logo" width={60} height={60} />
      </div>
      <div className="links-container">
        <MultilevelDropdown />
      </div>
    </div>
  );
}

export default Header;
