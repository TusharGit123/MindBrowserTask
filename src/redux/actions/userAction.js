import { CREATE_USER, DELETE_USER } from "../type";

// action
export const addUser = (user) => {
  return {
    type: CREATE_USER,
    payload: user,
  };
};

//delete user
export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});
