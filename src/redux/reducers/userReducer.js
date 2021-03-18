import { CREATE_USER, DELETE_USER } from "../type";
const initialState = {
  Users: [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: "ring road",
      birthdate: "15th April 1995",
      phone: "1-770-736-8031 x56442",
      gender: "male",
      college: "Pune Univercity",
      hobbies: "cricket",
    },
    // {
    //   id: 2,
    //   name: "Ervin Howell",
    //   username: "Antonette",
    //   email: "Shanna@melissa.tv",
    //   address: "main road",
    //   birthdate: "10th march 1996",
    //   phone: "010-692-6593 x09125",
    //   gender: "male",
    //   college: "AISSMs IOIT",
    //   hobbies: "traveling",
    // },
  ],
  user: null,
  selectAllUsers: [],
};

//reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        Users: [action.payload, ...state.Users],
      };

    case DELETE_USER:
      return {
        ...state,
        Users: state.Users.filter((user) => user.id !== action.payload),
      };

    default:
      return state;
  }
};

export default userReducer;
