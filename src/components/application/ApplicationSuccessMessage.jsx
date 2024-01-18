import { Box, Button, Stack, Typography } from "@mui/material";

import css from "../../css/applicationsuccessmessage";
import { useDialog } from "../../contexts/DialogContext";

function ApplicationSuccessMessage({ name, animal, ghost, commonRoom }) {
  const { setIsOpen } = useDialog();

  return (
    <Stack flexGrow={1} flexDirection="column" color="white">
      <Typography variant="h5">
        {`${name}, your application was submitted successfully!`}
      </Typography>
      <Typography variant="h5">
        <span>
          {`Upon your arrival, please present your animal "${animal}" and
      summon your ghost "${ghost}"!`}
        </span>
        <br />
        <span>
          {`Once you pass Mr. Filch's security check, head to your "${commonRoom}" Common Room immediately!`}
        </span>
        <br />
        <span>You shall receive an owl shortly with further instructions!</span>
      </Typography>
      <Stack display="flex" flexDirection="row">
        <Box flexGrow={1} />
        <Button onClick={() => setIsOpen(false)} sx={css}>
          Close
        </Button>
      </Stack>
    </Stack>
  );
}

export default ApplicationSuccessMessage;
