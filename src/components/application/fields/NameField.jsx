import { TextField } from "@mui/material";

import { isValidName } from "../../../helpers";

function NameField({ name, setName }) {
  function handleUpdateName(e) {
    const newValue = e.target.value;
    setName(newValue);

    if (newValue && !isValidName(newValue)) {
      e.target.setCustomValidity(
        "Name field must contain between 5 and 20 characters inclusive!"
      );
      return;
    }

    e.target.setCustomValidity("");
  }

  return (
    <TextField
      value={name}
      onChange={handleUpdateName}
      required
      label="Name"
      placeholder="Enter your name"
    />
  );
}

export default NameField;
