import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPerson, deleteList, sortList } from "../../features/counter/nameSlice";

// function CuParent(props){
//     return(
//         <div>
//             CuParent:
//             <OngParent/>
//         </div>

//     );
// }

// function OngParent(props){
//     return(
//         <div>
//             OngParent:
//             <ChaParent/>
//         </div>
//     )
// }

// function ChaParent(props){
//     return(
//         <div>
//             ChaParent:
//             <ConParent/>
//         </div>
//     )
// }

// function ConParent(props){
//     //const nameFromStore = useSelector((state) => state.test);
//     const dispatch = useDispatch();

//     return(
//         <div>
//             <p>{nameFromStore}</p>
//             <button onClick={() => dispatch(changeName())}>Change Name</button>
//             <button onClick={() => dispatch(clearName())}>Clear Name</button>
//         </div>

//     )
// }

// Redux -> CuParent -> OngParent -> ChaParent -> Con
function Redux() {
  const nameFromStore = useSelector((state) => state.test);
  const [inputValue, setInputvalue ] = useState("");
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const change1 = () =>{
    setIsActive(!isActive);
  }
  const change2 = () =>{
    setIsActive(!isActive);
  }
  return (
    <div>
      <h4>Chap 4: Redux</h4>
      <input value={inputValue} onChange={(e) => {
        setInputvalue(e.target.value)
      }} />
      <button onClick={()=> dispatch(addPerson())}>Add Person</button>
      <button onClick={() => dispatch(sortList())}>Sort</button>
      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {nameFromStore.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td><button onClick={(item) => dispatch(deleteList({ payload: { id: item.id } }))}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{width:'200px', height:'200px', background: isActive ? 'green' : 'red'}} onClick={change1}>
        <div style={{width:'100px', height:'100px', background:isActive ? 'red' : 'green'}} onClick={change2}>

        </div>
          
      </div>
      {/* <CuParent/> */}
    </div>
  );
}

export default Redux;
