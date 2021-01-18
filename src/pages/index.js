import React, { useEffect } from "react";
import { Button, Container, Heading } from "theme-ui";
import netlifyIdentity from "netlify-identity-widget";
const Home = () => {
  useEffect(() => {
    netlifyIdentity.init();
  }, []);
  return (
    <Container>
      <Container sx={{ display: "flex", flexDirection: "column", padding: 3 }}>
        <Heading as="h1">Hello JS!</Heading>
        <Button
          sx={{ marginTop: 3 }}
          onClick={() => {
            netlifyIdentity.open();
          }}
        >
          Log In
        </Button>
      </Container>
    </Container>
  );
};

export default Home;
