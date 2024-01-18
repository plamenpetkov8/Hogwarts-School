import { DEFAULT_TEXT_COLOR, HOUSES_COLORS } from "../constants";

const { GRYFFINDOR, RAVENCLAW, HUFFLEPUFF, SLYTHERIN } = HOUSES_COLORS;
const rootCss = {
  width: "50%",
  background: `linear-gradient(90deg, ${GRYFFINDOR.transparent}, ${RAVENCLAW.transparent}, ${HUFFLEPUFF.transparent}, ${SLYTHERIN.transparent})`,
};

const columnMenuCss = {
  color: DEFAULT_TEXT_COLOR,
  backgroundColor: "#123e66",
};

const dataGridCss = {
  color: DEFAULT_TEXT_COLOR,
  "& .MuiDataGrid-sortIcon, & .MuiDataGrid-menuIconButton": {
    color: DEFAULT_TEXT_COLOR,
    fontWeight: 700,
  },
  "& .MuiDataGrid-filterIcon": {
    color: DEFAULT_TEXT_COLOR,
  },

  "& .MuiDataGrid-menuList * div": {
    backgroundColor: "red",
    cursor: "crosshair",
  },
};

function getFilterPanelCss(optionBgc, setOptionBgc) {
  return {
    backgroundColor: "#123e66",
    "& .MuiDataGrid-filterFormDeleteIcon *, .MuiDataGrid-filterFormColumnInput *, .MuiDataGrid-filterFormOperatorInput *, .MuiDataGrid-filterFormValueInput *":
      {
        color: DEFAULT_TEXT_COLOR,
      },
    "& .MuiDataGrid-filterFormColumnInput option, .MuiDataGrid-filterFormOperatorInput option":
      {
        onClick: () => {
          setOptionBgc("var(--color-bg)");
        },
        backgroundColor: optionBgc,
      },
  };
}

export { rootCss, columnMenuCss, dataGridCss, getFilterPanelCss };
