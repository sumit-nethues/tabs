import React, { useState, useEffect, useRef } from "react";
import "../Navbar/Navbar.css";

const tabsObject = {
  Tab1: false,
  Tab2: false,
  Tab3: false,
};

const Navbar = ({ tabsData }) => {
  const headerRef = useRef(null);
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
    if (!!headerRef.current) {
      let dropwdownMenuList =
        headerRef.current.querySelectorAll(".sub-tabs-dropdown");
      if (dropwdownMenuList.length > 0) {
        dropwdownMenuList.forEach((element, i) => {
          if (element.classList.contains("active")) {
            const tabName = element.classList[1];
            console.log("closed dropdown");
            setShowTabs({ ...showTabs, [tabName]: false });
          }
        });
      }
    }
  };

  return (
    <header ref={headerRef} className="navbar-conatiner">
      <a className="header-logo" href="/">
        LOGO
      </a>
      {tabsData.length > 0 && (
        <ul className={`main-header-tabs ${showMenu ? "active" : ""}`}>
          {tabsData.map((data) => (
            <li
              key={data._id}
              className="tabs"
              onClick={(e) => setTabsVisibility(e, data.name)}
            >
              {data.name}
              <ul>
                <li
                  className={`sub-tabs-dropdown ${data.name} ${
                    showTabs[data.name] ? "active" : "hidden"
                  }`}
                >
                  {data.subTabs.map((data, i) => (
                    <a key={i} href="#">
                      {data}
                    </a>
                  ))}
                </li>
              </ul>
            </li>
          ))}
        </ul>
      )}

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
