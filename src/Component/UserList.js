import React from "react";

const UserList = ({ users, editUser, deleteConfirmation }) => {
  const handleEditUser = (user) => {
    editUser(user);
  };

  const handleDeleteConfirmation = (user) => {
    deleteConfirmation(user);
  };

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <div>
            <strong>Name:</strong> {user.name}
          </div>
          <div>
            <strong>Email:</strong> {user.email}
          </div>
          <div>
            <strong>Phone:</strong> {user.phone}
          </div>
          <button onClick={() => handleEditUser(user)} className="button-list">
            Edit
          </button>
          <button
            onClick={() => handleDeleteConfirmation(user)}
            className="button-list"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
