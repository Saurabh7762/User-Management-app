import React, { useState } from 'react';
const UserForm = ({ addUser, updateUser, userToEdit, clearUserToEdit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      alert('Please fill in all fields');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email');
      return;
    }

    if (!validatePhone(phone)) {
      alert('Please enter a valid phone number');
      return;
    }

    if (userToEdit) {
      updateUser(userToEdit.id, { name, email, phone });
      clearUserToEdit();
    } else {
      addUser({ name, email, phone });
    }

    setName('');
    setEmail('');
    setPhone('');
  };

  const validateEmail = (email) => {
    // Email validation logic 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    // Phone number validation logic
    const phonePattern = /^\d{10}$/; // Match 10 digits
    return phonePattern.test(phone);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">{userToEdit ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default UserForm;
