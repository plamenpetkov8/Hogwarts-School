import { TextField } from "@mui/material";

function CommonRoomField({ commonRoom, setCommonRoom }) {
  return (
    <TextField
      value={commonRoom}
      onChange={(e) => {
        setCommonRoom(e.target.value);
      }}
      label="Common Room"
      placeholder="Enter your Common Room"
    />
  );
}

export default CommonRoomField;
