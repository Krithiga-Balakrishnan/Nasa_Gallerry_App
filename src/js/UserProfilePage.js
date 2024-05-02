import React, { useState } from 'react';
import { useUserAuth } from "../auth/UserAuthContext";
import { Link } from 'react-router-dom';
import { Container, Button, Form } from 'react-bootstrap';
import { getDatabase, ref, update } from "firebase/database";


const UserProfilePage = () => {
  const { user } = useUserAuth();
  const [editingProfile, setEditingProfile] = useState(false);
  const [newName, setNewName] = useState(user.userName || '');
  const [newEmail, setNewEmail] = useState(user.email || '');

  const handleEditProfile = () => {
    // If the email is empty in the database, update it with the current user's email
    if (!user.userEmail) {
      const userRef = ref(getDatabase(), `users/${user.uid}`);
      update(userRef, { userEmail: user.email }).catch(error => {
        console.error("Error updating email:", error);
      });
    }
    setEditingProfile(true);
    setNewName(user.userName || '');
  };

  const handleSaveProfile = () => {
    // Update the user's name and email in the Firebase Realtime Database
    const userRef = ref(getDatabase(), `users/${user.uid}`);
    update(userRef, { userName: newName, userEmail: newEmail }).then(() => {
      setEditingProfile(false);
    }).catch(error => {
      console.error("Error updating profile:", error);
    });
  };

  const handleCancelEdit = () => {
    setEditingProfile(false);
    setNewName(user.userName || '');
    setNewEmail(user.email || '');
  };

  return (
    <div>
      <Container>
        <h2 style={{ textAlign: "center" }}>User Profile</h2>
        <div style={{ paddingTop: '2rem' }}>
          {editingProfile ? (
            <Form>
              <Form.Group controlId="formUserName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formUserEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  disabled // Add the disabled attribute
                />
              </Form.Group>
              <Button variant="primary" onClick={handleSaveProfile}>Save</Button>{' '}
              <Button variant="secondary" onClick={handleCancelEdit}>Cancel</Button>
            </Form>
          ) : (
            <>
              <p><strong>Name:</strong> {user.userName}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <Button variant="primary" onClick={handleEditProfile}>Edit Profile</Button>
            </>
          )}
          {/* If user has profile picture, display it */}
          {user.profilePicture && <img src={user.profilePicture} alt="Profile" />}
        </div>
      </Container>
    </div>
  );
};

export default UserProfilePage;
