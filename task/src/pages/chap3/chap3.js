import React, { useRef } from "react";
import ChildrenComponent from "./ChildrenComponent";

const Parent = () => {
  const childrenRef = useRef(null);

  const handleGetFormData = () => {
    if (childrenRef.current) {
      const formData = childrenRef.current.getFormData();
      console.log("Form Data:", formData);
    }
  };

  const handleResetData = () => {
    const from = childrenRef.current.resetFormData();
    console.log("ss", from);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildrenComponent ref={childrenRef} />
      <button onClick={handleGetFormData}>Get Form Data</button>
      <button onClick={handleResetData}>Reset</button>
    </div>
  );
};

export default Parent;
