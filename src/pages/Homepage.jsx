import { Box, Stack } from "@mui/material";

import AppHeader from "../components/AppHeader";
import HousesTable from "../components/HousesTable";

import css from "../css/homepage";

function Homepage() {
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
          <HousesTable />
        </Stack>
      </main>
    </Box>
  );
}

export default Homepage;
