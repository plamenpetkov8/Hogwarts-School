import { Box, Stack } from "@mui/material";

import AppHeader from "../components/AppHeader";
import ContactCard from "../components/ContactCard";

import css from "../css/contact";

function Contact() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        height: "100vh",
      }}
    >
      <AppHeader />
      <main>
        <Stack flexGrow={1} sx={{ ...css }}>
          <ContactCard />
        </Stack>
      </main>
    </Box>
  );
}

export default Contact;
