import React, { useState } from "react";
import PersonalInfo from "../firstPage/PersonalInfo";
import PlansPage from "../secondpage/PlansPage";
import AddonPage from "../thirdpage/AddonPage";
import FinishupPage from "../fourthpage/FinishupPage";

const ParentForAll = () => {
  const [currentPage, setCurrentPage] = useState("personalInfo");

  const [storedData, setStoredData] = useState([]);
  return (
    <div>
      {currentPage === "personalInfo" && (
        <PersonalInfo
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          storedData={storedData}
          setStoredData={setStoredData}
        />
      )}
      {currentPage === "plansPage" && (
        <PlansPage
          currentPage={currentPage}
          storedData={storedData}
          setCurrentPage={setCurrentPage}
          setStoredData={setStoredData}
        />
      )}
      {currentPage === "addons" && (
        <AddonPage
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          storedData={storedData}
          setStoredData={setStoredData}
        />
      )}
      {currentPage === "finish" && (
        <FinishupPage
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          storedData={storedData}
          setStoredData={setStoredData}
        />
      )}
    </div>
  );
};

export default ParentForAll;
