import { Box, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import { useDialog } from "../contexts/DialogContext";

import ApplicationFormDialog from "./application/ApplicationFormDialog";
import { applyButtonCss, contactButtonCss } from "../css/navbtnslist";

function NavBtnsList() {
  const { setIsOpen } = useDialog();
  const { pathname } = useLocation();

  function handleRedirection(e) {
    if (pathname === e.target.pathname) e.preventDefault();
  }

  return (
    <>
      <Box>
        <Button onClick={() => setIsOpen(true)} sx={applyButtonCss}>
          Apply
        </Button>
        <Button
          component={Link}
          onClick={handleRedirection}
          to="/contact"
          sx={contactButtonCss}
        >
          Contact
        </Button>
      </Box>
      <ApplicationFormDialog />
    </>
  );
}

export default NavBtnsList;
