import { useState } from "react";
import { Alert } from "@mui/material";
import { DataGrid, getGridStringOperators } from "@mui/x-data-grid";

import { useHouses } from "../contexts/HousesContext";

import { isValidOperator } from "../helpers";
import {
  columnMenuCss,
  dataGridCss,
  getFilterPanelCss,
  rootCss,
} from "../css/housetable";
import GridFilterAltIcon from "./icons/GridFilterAltIcon";
import GridArrowUpwardIcon from "./icons/GridArrowUpwardIcon";
import GridArrowDownwardIcon from "./icons/GridArrowDownwardIcon";

function HousesTable() {
  const [optionBgc, setOptionBgc] = useState("white");
  const { housesData: data, isLoading, error } = useHouses();

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      hideable: false,
      aggregable: false,
      filterOperators: getGridStringOperators().filter((operator) => {
        return isValidOperator(operator.value);
      }),
    },
    {
      field: "animal",
      headerName: "Animal",
      flex: 1,
      hideable: false,
      filterOperators: getGridStringOperators().filter((operator) =>
        isValidOperator(operator.value)
      ),
    },
    {
      field: "ghost",
      headerName: "Ghost",
      flex: 1,
      hideable: false,
      filterOperators: getGridStringOperators().filter((operator) =>
        isValidOperator(operator.value)
      ),
    },
    {
      field: "commonRoom",
      headerName: "Common Room",
      flex: 1,
      hideable: false,
      filterOperators: getGridStringOperators().filter((operator) =>
        isValidOperator(operator.value)
      ),
    },
  ];

  return error ? (
    <Alert variant="filled" severity="error">
      {error}
    </Alert>
  ) : (
    <div style={rootCss}>
      <DataGrid
        autoHeight
        loading={isLoading}
        hideFooter
        rows={data}
        columns={columns}
        rowSelection={false}
        disableColumnSelector
        classes={{
          icon: "red",
        }}
        slots={{
          columnMenuFilterIcon: GridFilterAltIcon,
          columnMenuSortAscendingIcon: GridArrowUpwardIcon,
          columnMenuSortDescendingIcon: GridArrowDownwardIcon,
        }}
        slotProps={{
          columnMenu: {
            sx: columnMenuCss,
          },
          filterPanel: {
            sx: getFilterPanelCss(optionBgc, setOptionBgc),
          },
        }}
        sx={dataGridCss}
      />
    </div>
  );
}

export default HousesTable;
