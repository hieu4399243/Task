import React, { useState } from "react";
import image from '../../assets/data/image.png'

export default function Commands() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState('');
  const changeCount = () => {
    setCount(count + 1);
  };
  const changeName = (event) => {
    setName(event.target.value);
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
  };
  const handFocusName = (event) =>{
    setMessage(`Input focused: ${event.target.name}`);
  }
  const handleBlur = () => {
    setMessage('');
  };
  return (
    <div style={{padding: '20px'}}>
      <h4>Chap 3: Các thẻ trong HTML</h4>
      <p>Textarea</p>
      <textarea>Input information....</textarea>
      <p>Image: </p>
      <img src={image} />/
      <p>Button, onclick events: </p>
      <h1>Count: {count}</h1>
      <button
        onClick={changeCount}
        type="Click me"
        style={{ marginBottom: "10px" }}
      >
        Click
      </button>
      <div className="scroll">
        <p>Scroll list</p>
        <ul className="list">
          {[...Array(20).keys()].map((item) => (
            <li key={item}>Item {item + 1}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>Email, Password: </p>
        <label>Name: </label>
        <input name="email" type="text" onChange={changeName} onFocus={handFocusName} onBlur={handleBlur}/>
        <label>Password: </label>
        <input name="password" type="password" onChange={changePassword} onFocus={handFocusName} onBlur={handleBlur}/>
        <button>Update</button>
        <p>Name : {name}</p>
        <p>Password: {password}</p>
        <p>Message: {message}</p>
      </div>
    </div>
  );
}

const styles = {
  backgroundColor: "lightblue",
  padding: "10px",
  borderRadius: "5px",
  padding: "5px",
};
