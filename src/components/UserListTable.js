import React from "react";
import { useSelector } from "react-redux";
// import { deleteUser } from "../redux/actions/userAction";

const UserListTable = ({ searchname }) => {
  // const dispatch = useDispatch();
  const Users = useSelector((state) => state.allUsers.Users);

  const onDeleteUser = (index) => {
    let allUserData = Users;
    let newDataArr = [];
    allUserData.splice(index, 1);
    console.log(allUserData);
    newDataArr.push(allUserData);
    console.log(newDataArr);
  };

  return (
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Sr.No.</th>
            <th scope="col">Name</th>
            <th scope="col">DOB</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Gender</th>
            <th scope="col">College</th>
            <th scope="col">Hobbies</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Users.filter((val) => {
            if (searchname === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchname.toLowerCase()) ||
              val.email.toLowerCase().includes(searchname.toLowerCase())
            ) {
              return val;
            }
          }).map((user, index) => (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{user.name}</td>
              <td>{user.birthdate}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>{user.gender}</td>
              <td>{user.college}</td>
              <td>{user.hobbies}</td>
              <td>
                <i
                  className="fa fa-pencil mr-3"
                  aria-hidden="true"
                  // onClick={() => onEditUser(user, index)}
                ></i>
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  // onClick={() => dispatch(deleteUser(index))}
                  onClick={() => onDeleteUser(index)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserListTable;
