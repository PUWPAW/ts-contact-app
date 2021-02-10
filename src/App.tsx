import React from "react";
import { Container } from "@material-ui/core";
import { Header } from "./components/Header";
import { FilterBar } from "./components/FilterBar";
import { ContactTable } from "./components/ContactTable";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { RootStoreType } from "./Store/store";
import { useAction } from "./hooks/useAction";
import { FilterData } from "./components/ContactTable/utils/filterData";

// TODO
// Перенести пагинацию в таблицу
const App: React.FC = (): React.ReactElement => {
  const { CurrentPage } = useAction();
  const { pageCapacity, currentPage } = useSelector(
    (state: RootStoreType) => state.contacts
  );
  const { genderValue, nameValue, natValue } = useSelector(
    (state: RootStoreType) => state.filter
  );
  const filteredData = FilterData();

  React.useEffect(() => {
    if (currentPage > 1) {
      CurrentPage(1);
    }
  }, [genderValue, nameValue, natValue]);

  return (
    <Container maxWidth="lg">
      <Header />
      <FilterBar />
      <ContactTable />
      {filteredData.length !== 0 ? (
        <ReactPaginate
          pageCount={Math.ceil(filteredData.length / pageCapacity)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          onPageChange={(data) => CurrentPage(data.selected + 1)}
          containerClassName="pagination"
        />
      ) : null}
    </Container>
  );
};

export default App;
