import React, { useState } from "react";
import PersonalInfo from "../firstPage/PersonalInfo";

const ParentForAll = () => {
  const [currentPage, setCurrentPage] = useState("personalInfo");
  return <div>{currentPage === "personalInfo" && <PersonalInfo />}</div>;
};

export default ParentForAll;
