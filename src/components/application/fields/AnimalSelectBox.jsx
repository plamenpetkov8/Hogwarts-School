import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import css from "../../../css/animalselectbox";

function AnimalSelectBox({ animal, setAnimal }) {
  return (
    <FormControl fullWidth>
      <InputLabel color="custom" id="animals-select-label" sx={css}>
        Animal
      </InputLabel>
      <Select
        labelId="animals-select-label"
        id="animals-select"
        value={animal}
        onChange={(e) => {
          setAnimal(e.target.value);
        }}
        label="Animal"
      >
        <MenuItem value="giraffe">giraffe</MenuItem>
        <MenuItem value="dolphin">dolphin</MenuItem>
        <MenuItem value="armadillo">armadillo</MenuItem>
        <MenuItem value="unicorn">unicorn</MenuItem>
      </Select>
    </FormControl>
  );
}

export default AnimalSelectBox;
