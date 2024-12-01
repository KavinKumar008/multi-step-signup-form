import React, { useRef, useState } from "react";
import LeftContainer from "../leftcontainer/LeftContainer";
import FinishupPage from "../fourthpage/FinishupPage";

const AddonPage = ({ setCurrentPage, setStoredData, storedData }) => {
  const [checkBoxSelected, setCheckBoxSelected] = useState([]);

  const [boxBorder, setBoxBorder] = useState({
    ischeckBox1: false,
    ischeckBox2: false,
    ischeckBox3: false,
  });

  const idRef = useRef(0);

  const storedCheckBoxData = (service, extraCash) => {
    const newId = idRef.current + 1;
    idRef.current = newId;
    setCheckBoxSelected((prevValue) => {
      const isDuplicate = prevValue.some((item) => item.service === service);
      if (isDuplicate) {
        return prevValue.filter((item) => item.service !== service);
      } else {
        return [
          ...prevValue,
          { id: newId, service: service, extraCash: extraCash },
        ];
      }
    });
  };

  function handleCheckBox1(e) {
    storedCheckBoxData("Online service", "+$1/mo");
    setBoxBorder((prev) => ({ ...prev, ischeckBox1: e.target.checked }));
  }

  function handleCheckBox2(e) {
    storedCheckBoxData("Larger storage", "+$2/mo");
    setBoxBorder((prev) => ({ ...prev, ischeckBox2: e.target.checked }));
  }

  function handleCheckBox3(e) {
    storedCheckBoxData("Customizable Profile", "+$2/mo");
    setBoxBorder((prev) => ({ ...prev, ischeckBox3: e.target.checked }));
  }

  console.log(storedData);

  function handleForward() {
    setCurrentPage("finish");
    setStoredData((prev) => [...prev, checkBoxSelected]);
  }

  function handleBackward() {
    setCurrentPage("plansPage");
  }

  return (
    <div className="h-screen flex justify-center items-center max-sm:h-0">
      <main className="bg-white w-8/12 h-5/6 rounded-lg flex  p-4 gap-16 shadow-lg max-sm:block max-sm:w-full max-sm:p-0 max-sm:bg-[rgb(0,255,255)] max-sm:shadow-none max-lg:w-auto">
        <LeftContainer />
        <section className="w-[70%] p-5 max-sm:w-full max-sm:mt-32 max-sm:bg-white max-sm:relative max-sm:h-[420px]">
          <div className="max-sm:flex max-sm:flex-col max-sm:gap-3">
            <h3 className="text-3xl font-bold text-blue-900 max-sm:text-4xl">
              Pick add-ons
            </h3>
            <p className="text-gray-400 text-sm max-sm:text-xl">
              Add-ons help enhance your gaming experience.
            </p>
          </div>
          <div className="flex flex-col gap-4 pt-8 max-lg:pt-10 max-lg:pr-4 max-sm:p-1">
            <div
              className={`flex gap-8 items-center border ${
                boxBorder.ischeckBox1 ? "border-blue-600" : "border-gray-400"
              } rounded-md  p-4 max-sm:p-1`}
            >
              <input
                type="checkbox"
                checked={boxBorder.ischeckBox1}
                onChange={handleCheckBox1}
              />
              <div className="flex items-center gap-32">
                <div>
                  <p className="text-violet-950 text-sm font-medium max-sm:text-xs">
                    Online service
                  </p>
                  <p className="text-gray-400 text-xs font-normal">
                    Access to multiplayer games
                  </p>
                </div>
                <div>
                  <span className="text-blue-400 text-sm font-medium">
                    +$1/mo
                  </span>
                </div>
              </div>
            </div>
            <div
              className={`flex gap-8 items-center border ${
                boxBorder.ischeckBox2 ? "border-blue-600" : "border-gray-400"
              } rounded-md  p-4 max-sm:p-1`}
            >
              <input
                type="checkbox"
                checked={boxBorder.ischeckBox2}
                onChange={handleCheckBox2}
              />
              <div className="flex items-center gap-32">
                <div>
                  <p className="text-violet-950 text-sm font-medium">
                    Larger storage
                  </p>
                  <p className="text-gray-400 text-xs font-normal">
                    Extra 1TB of cloud save
                  </p>
                </div>
                <div>
                  <span className="text-blue-400 text-sm font-medium">
                    +$2/mo
                  </span>
                </div>
              </div>
            </div>
            <div
              className={`flex gap-8 items-center border ${
                boxBorder.ischeckBox3 ? "border-blue-600" : "border-gray-400"
              } rounded-md  p-4 max-sm:p-1`}
            >
              <input
                type="checkbox"
                checked={boxBorder.ischeckBox3}
                onChange={handleCheckBox3}
              />
              <div className="flex items-center gap-32">
                <div>
                  <p className="text-violet-950 text-sm font-medium">
                    Customizable Profile
                  </p>
                  <p className="text-gray-400 text-xs font-normal">
                    Custom theme on your profile
                  </p>
                </div>
                <div>
                  <span className="text-blue-400 text-sm font-medium">
                    +$2/mo
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-20 max-sm:hidden max-lg:mt-16">
            <button
              className="text-blue-950 text-sm font-bold"
              onClick={handleBackward}
            >
              Go Back
            </button>
            <button
              type="button"
              className="bg-blue-900 text-white py-3 px-4 rounded-md text-xs"
              onClick={handleForward}
            >
              Next Step
            </button>
          </div>
        </section>
        <div className="flex justify-between mt-16 bg-white p-3 min-[640px]:hidden ">
          <button
            className="text-blue-950 text-sm font-bold max-sm:text-lg"
            onClick={handleBackward}
          >
            Go Back
          </button>
          <button
            type="button"
            className="bg-blue-900 text-white py-3 px-4 rounded-md text-xs max-sm:px-6 max-sm:text-lg max-sm:font-medium"
            onClick={handleForward}
          >
            Next Step
          </button>
        </div>
      </main>
    </div>
  );
};

export default AddonPage;
