import React, { useState } from "react";
import "./App.css";
import UserForm from "./Component/UserForm";
import UserList from "./Component/UserList";
import EditUserModal from "./Component/EditUserModal";
import DeleteConfirmationModal from "./Component/DeleteConfirmationModal";

const App = () => {
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  const addUser = (user) => {
    const newUser = { id: Date.now(), ...user };
    setUsers([...users, newUser]);
  };

  const updateUser = (userId, updatedUser) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, ...updatedUser } : user
      )
    );
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
    closeDeleteModal();
  };

  const editUser = (user) => {
    setUserToEdit(user);
    setIsEditModalOpen(true);
  };

  const deleteConfirmation = (user) => {
    setUserToDelete(user);
    setIsDeleteModalOpen(true);
  };

  const closeEditModal = () => {
    setUserToEdit(null);
    setIsEditModalOpen(false);
  };

  const closeDeleteModal = () => {
    setUserToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
 

  return (
    <>
      <div className="container">
        <div className="input-section">
          <div className="name-search">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <h1>User Management</h1>
          <UserForm
            addUser={addUser}
            updateUser={updateUser}
            userToEdit={userToEdit}
            clearUserToEdit={closeEditModal}
          />
        </div>
        <div className="user-data-section">
          <UserList
            // users={users}
            users={filteredUsers}
            editUser={editUser}
            deleteConfirmation={deleteConfirmation}
          />
        </div>
        {isEditModalOpen && (
          <EditUserModal
            user={userToEdit}
            updateUser={updateUser}
            closeModal={closeEditModal}
          />
        )}
        {isDeleteModalOpen && (
          <DeleteConfirmationModal
            user={userToDelete}
            deleteUser={deleteUser}
            closeModal={closeDeleteModal}
          />
        )}
      </div>
    </>
  );
};

export default App;
