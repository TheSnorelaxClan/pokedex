import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Container } from 'react-bootstrap';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <Container className="fixed-top mt-2">
        {/* <img 
        src={user.picture} 
        alt={user.name}
        className="rounded-circle img-fluid profile-picture mb-3 mb-md-0" /> */}
        {/* <h3>{user.name}</h3>
        <p>{user.email}</p> */}
      </Container>
    )
  );
};

export default Profile;

