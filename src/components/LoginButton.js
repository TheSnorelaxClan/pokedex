import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
    <Container className="fixed-top mt-2">
  <Button 
  variant="outline-light" 
  onClick={() => loginWithRedirect()}>Log In</Button>
</Container>
</>
)
};

export default LoginButton;
