import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Container } from 'react-bootstrap';

const Profile = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <Container>
        {/* <img src={user.picture} alt={user.name} /> */}
        {/* <h3>{user.name}</h3>
        <p>{user.email}</p> */}
      </Container>
    )
  );
};

export default Profile;
