import React from "react";
import { Container } from "@material-ui/core";
import { Header } from "./components/Header";
import { FilterBar } from "./components/FilterBar";
import { ContactTable } from "./components/ContactTable";

const App: React.FC = (): React.ReactElement => {
  return (
    <Container maxWidth="lg">
      <Header />
      <FilterBar />
      <ContactTable />
    </Container>
  );
};

export default App;
