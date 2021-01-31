import React from "react";
import { Container } from "@material-ui/core";
import { Header } from "./components/Header";
import { FilterBar } from "./components/FilterBar";

const App: React.FC = (): React.ReactElement => {
  return (
    <Container maxWidth="md">
      <Header />
      <FilterBar />
    </Container>
  );
};

export default App;
