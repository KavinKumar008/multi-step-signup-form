import React from "react";
import PersonalInfo from "./firstPage/PersonalInfo";
import PlansPage from "./secondpage/PlansPage";
import AddonPage from "./thirdpage/AddonPage";
import FinishupPage from "./fourthpage/FinishupPage";

const App = () => {
  return (
    <div>
      <PersonalInfo />
      <PlansPage />
      <AddonPage />
      <FinishupPage />
    </div>
  );
};

export default App;
