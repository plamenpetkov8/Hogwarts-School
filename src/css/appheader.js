import { HOUSES_COLORS } from "../constants";

const { GRYFFINDOR, RAVENCLAW, HUFFLEPUFF, SLYTHERIN } = HOUSES_COLORS;
const appBarCss = {
  background: `linear-gradient(90deg, ${GRYFFINDOR.main}, ${RAVENCLAW.main}, ${HUFFLEPUFF.main}, ${SLYTHERIN.main})`,
};

const iconButtonCss = { mr: 2 };
const typographyCss = { flexGrow: 1 };

export { appBarCss, iconButtonCss, typographyCss };
