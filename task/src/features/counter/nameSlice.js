import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = [
  {
    id: 1,
    name: "Tran Van A",
    price: 10000,
  },
  {
    id: 2,
    name: "Tran Van B",
    price: 5000,
  },
  {
    id: 3,
    name: "Tran Van B",
    price: 5000,
  }
];
export const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    // changeName: (state) =>{
    //   if(state === 'Hieu'){
    //     return 'Tran Minh Hieu'
    //   }else{
    //     return 'Hieu';
    //   }
    // },
    // clearName : () => {
    //   return '';
    // }
    addPerson: (state, action) => {
      let cloneState = [...state];
      return [...cloneState, { id: nanoid(), name: action.payload }];
      // state.push({
      //   id: nanoid(),
      //   name: action.payload,
      // });
    },
    sortList: (state, action) => {
      let cloneState = [...state];
      cloneState.sort((a, b) => a.price - b.price);
      return cloneState;
    },
    deleteList: (state, action) => {
      return state.filter(t => t.id !== action.payload.id);
    },
  },
});
// export const {changeName, clearName} = nameSlice.actions;

export const { addPerson, sortList, deleteList } = nameSlice.actions;

export default nameSlice.reducer;
