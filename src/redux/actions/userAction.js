import { CREATE_USER } from "../type";

// action
export const addUser = (user) => {
  return {
    type: CREATE_USER,
    payload: user,
  };
};

//delete user
export const deleteUser = (updateData) => {
  console.log(updateData);
  // type: DELETE_USER,
  // payload: updateData,
};

// //delete user
// export const deleteUser = (index) => {
//   return {
//     type: DELETE_USER,
//     payload: index,
//   };
// };
