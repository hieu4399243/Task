import React, { forwardRef, useRef, useImperativeHandle } from "react";

const ChildrenComponent = (props, ref) => {
  const nameRef = useRef(null);
  const passwordRef = useRef(null);

  console.log("name", nameRef);
  console.log("pass", passwordRef);

  useImperativeHandle(ref, () => ({
    getFormData: () => {
      return {
        name: nameRef.current.value,
        pass: passwordRef.current.value,
      };
    },

    resetFormData: () => {
      return {
        name: (nameRef.current.value = ""),
        pass: (passwordRef.current.value = ""),
      };
    },
  }));

  return (
    <div>
      <label>Name: </label>
      <input type="text" ref={nameRef} />
      <label>Password: </label>
      <input type="password" ref={passwordRef} />
    </div>
  );
};

export default forwardRef(ChildrenComponent);
