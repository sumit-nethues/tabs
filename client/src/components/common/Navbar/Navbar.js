import React, { useState, useEffect } from "react";
import tabData from "../../../data/tabData.json";
import "../Navbar/Navbar.css";

let tabsObject = {
  Tab1: false,
  Tab2: false,
  Tab3: false,
};

const Navbar = () => {
  const [showTabs, setShowTabs] = useState(tabsObject);

  const [showMenu, setShowMenuVisibility] = useState(false);

  useEffect(() => {
    // close dropdown when clicked outside
    window.addEventListener("click", handleClickOnWindow);

    return () => window.removeEventListener("click", handleClickOnWindow);
  }, []);

  const setTabsVisibility = (e, name) => {
    if (name in showTabs) {
      setShowTabs({
        ...tabsObject,
        [name]: !showTabs[name],
      });
    }
    // stop event propagation when clicking tabs
    e.stopPropagation();
  };

  const handleClickOnWindow = () => {
    let dropwdownMenuList = document.querySelectorAll(".sub-tabs-dropdown");
    if (dropwdownMenuList.length > 0) {
      dropwdownMenuList.forEach((element, i) => {
        if (element.classList.contains("active")) {
          const tabName = element.classList[1];
          console.log("inside");
          setShowTabs({ ...showTabs, [tabName]: false });
        }
      });
    }
  };

  return (
    <header className="navbar-conatiner">
      <a className="header-logo" href="/">
        LOGO
      </a>
      <ul className={`main-header-tabs ${showMenu ? "active" : ""}`}>
        {Object.entries(tabData).map((data) => (
          <li
            key={data[0]}
            className="tabs"
            onClick={(e) => setTabsVisibility(e, data[1].name)}
          >
            {data[1].name}
            <ul>
              <li
                className={`sub-tabs-dropdown ${data[1].name} ${
                  showTabs[data[1].name] ? "active" : "hidden"
                }`}
              >
                {data[1].subtabs.map((data, i) => (
                  <a key={i} href="#">
                    {data}
                  </a>
                ))}
              </li>
            </ul>
          </li>
        ))}
      </ul>
      <div
        className="hamburger"
        onClick={() => setShowMenuVisibility((prev) => !prev)}
      >
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
    </header>
  );
};

export default Navbar;
