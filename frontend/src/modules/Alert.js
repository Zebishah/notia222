import React from "react";

const Alert = (props) => {
  let { shos } = props;
  return (
    <>
      <div
        className={`flex relative -top-[16rem] justify-center items-center w-[100%] h-12 bg-green-400 text-green-950 -translate-x-full ${
          shos && "translate-x-0"
        } transition-all duration-500 delay-200 ease-in-out`}
      >
        <h3>
          Operation is Successfully completed! Note is Added in Your All Notes
        </h3>
      </div>
      {}
    </>
  );
};

export default Alert;
