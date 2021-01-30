import React from "react";
import { Container } from "@material-ui/core";
import { Header } from "./components/Header";

const App: React.FC = (): React.ReactElement => {
  return (
    <Container maxWidth="md">
      <Header />
    </Container>
  );
};

export default App;
