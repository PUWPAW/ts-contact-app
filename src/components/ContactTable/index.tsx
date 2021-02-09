import React from "react";
import { useFetchData } from "../../hooks/useFetchData";

import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

import { ContactTableHeader } from "./components/ContactTableHeader";
import { ContactTablebody } from "./components/ContactTableBody";

import { useContactTableStyles } from "./styles";
import { Error } from "../Error";
import { Loader } from "../Loader";

export const ContactTable = () => {
  const classes = useContactTableStyles();
  const { loading, errorMsg } = useFetchData();

  if (loading) {
    return <Loader />;
  }

  if (errorMsg) {
    return <Error message={errorMsg} />;
  }

  return (
    <TableContainer className={classes.root} component={Paper} elevation={3}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <ContactTableHeader classes={classes} />
        <ContactTablebody />
      </Table>
    </TableContainer>
  );
};
