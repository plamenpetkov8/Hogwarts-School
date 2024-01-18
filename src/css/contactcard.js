import { DEFAULT_TEXT_COLOR, HOUSES_COLORS } from "../constants";

const { GRYFFINDOR, RAVENCLAW, HUFFLEPUFF, SLYTHERIN } = HOUSES_COLORS;

const cardCss = {
  display: "flex",
  width: "50%",
  height: "50%",
  border: `1px solid ${DEFAULT_TEXT_COLOR}`,
  background: `linear-gradient(90deg, ${GRYFFINDOR.transparent}, ${RAVENCLAW.transparent}, ${HUFFLEPUFF.transparent}, ${SLYTHERIN.transparent})`,
};

const boxCss = {
  display: "flex",
  flexGrow: 1,
  borderRight: `1px solid ${DEFAULT_TEXT_COLOR}`,
  flexDirection: "column",
};

const cardContentCss = {
  color: DEFAULT_TEXT_COLOR,
  display: "flex",
  flexDirection: "column",
  flex: "1 0 auto",
  fontStyle: "italic",
};

const cardMediaCss = { width: "30%" };

export { cardCss, boxCss, cardContentCss, cardMediaCss };
