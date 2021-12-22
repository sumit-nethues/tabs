import React, { useState, useEffect } from "react";
import Navbar from "./components/common/Navbar/Navbar";
import "./App.css";

const App = () => {
  const [tabsData, setTabsData] = useState([]);

  useEffect(() => {
    async function getTabsData() {
      try {
        const response = await fetch("/tabs/get-all-tabs");
        const data = await response.json();

        setTabsData(data.data);
      } catch (err) {
        console.log("error found in fetching tabs data", err);
      }
    }

    getTabsData();
  }, []);

  return (
    <div className="app-conatiner">
      <Navbar tabsData={tabsData} />
    </div>
  );
};

export default App;
