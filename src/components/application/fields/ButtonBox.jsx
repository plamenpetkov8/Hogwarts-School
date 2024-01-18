import { Box, Button, Stack } from "@mui/material";

import { useDialog } from "../../../contexts/DialogContext";
import { closeButtonCss, submitButtonCss } from "../../../css/buttonbox";

function ButtonBox() {
  const { setIsOpen } = useDialog();

  return (
    <Stack display="flex" flexDirection="row">
      <Box flexGrow={1} />
      <Button onClick={() => setIsOpen(false)} sx={closeButtonCss}>
        Close
      </Button>
      <Button type="submit" sx={submitButtonCss}>
        Submit
      </Button>
    </Stack>
  );
}

export default ButtonBox;
