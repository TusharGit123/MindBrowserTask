import React, { useState } from "react";
import SearchBox from "../components/resubaleComponents/SearchBox";
import UserListTable from "./UserListTable";
import AddUser from "../components/AddUser";

const UserDashboard = () => {
  const [searchname, setSearchname] = useState("");
  return (
    <>
      <div className="main-dashboard container">
        <h2>User Dashboard</h2>
        <div className="userlist-text">
          <h3>User List</h3>
          <div className="adduser-searchbox">
            <AddUser />
            <SearchBox
              value={searchname}
              onChange={(e) => setSearchname(e.target.value)}
            />
          </div>
        </div>
        <UserListTable searchname={searchname} />
      </div>
    </>
  );
};

export default UserDashboard;
