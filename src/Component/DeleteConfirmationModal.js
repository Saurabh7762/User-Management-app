import React from "react";

const DeleteConfirmationModal = ({ user, deleteUser, closeModal }) => {
  const handleDelete = () => {
    deleteUser(user.id);
  };

  return (
    <div className="modal-overlay">
      <div className="delete-modal">
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete this user?</p>
        <div className="user-details">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
        </div>
        <div className="modal-buttons">
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
          <button className="cancel-button" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
