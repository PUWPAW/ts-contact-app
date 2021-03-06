import React from "react";
import TableBody from "@material-ui/core/TableBody";

import { useContactTableStyles } from "../../styles";
import { ContactsRowTable } from "./components/ContactsRowTable";

import { FilterData } from "../../utils/filterData";
import { TableRow, TableCell, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootStoreType } from "../../../../Store/store";

type PropsType = {
  classes?: ReturnType<typeof useContactTableStyles>;
};

export const ContactTablebody: React.FC<PropsType> = (): React.ReactElement => {
  const { currentPage, pageCapacity } = useSelector(
    (state: RootStoreType) => state.contacts
  );
  const filteredData = FilterData();
  const startIndex = (currentPage - 1) * pageCapacity;
  const selectedUsers = filteredData.slice(
    startIndex,
    startIndex + pageCapacity
  );
  return (
    <TableBody>
      {filteredData.length !== 0 ? (
        selectedUsers.map((row) => (
          <ContactsRowTable key={row.login.uuid} row={row} />
        ))
      ) : (
        <TableRow>
          <TableCell align="left">
            <Typography>Таких данных нет!</Typography>
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};
