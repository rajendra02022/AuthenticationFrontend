import React from "react";
import User from "./User"; // Import the User component

const Users = ({ users }) => {
  return (
    <div className="users">
      <h2>List of Users</h2>
      {users.map((user, index) => (
        <User key={index} username={user.username} email={user.email} />
      ))}
    </div>
  );
};

export default Users;
