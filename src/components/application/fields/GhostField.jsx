import { TextField } from "@mui/material";

import { containsWord } from "../../../helpers";
import { BANNED_GHOST_NAME } from "../../../constants";

function GhostField({ ghost, setGhost }) {
  function handleUpdateGhost(e) {
    const newValue = e.target.value;
    setGhost(newValue);

    if (newValue && containsWord(newValue, BANNED_GHOST_NAME)) {
      e.target.setCustomValidity(
        `Ghost name must not contain the word "${BANNED_GHOST_NAME}"!`
      );
      return;
    }

    e.target.setCustomValidity("");
  }

  return (
    <TextField
      value={ghost}
      onChange={handleUpdateGhost}
      required
      label="Ghost"
      placeholder="Enter your ghost"
    />
  );
}

export default GhostField;
