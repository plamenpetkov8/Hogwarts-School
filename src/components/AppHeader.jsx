import { Link } from "react-router-dom";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

import Logo from "./Logo";
import NavBtnsList from "./NavBtnsList";
import { appBarCss, iconButtonCss, typographyCss } from "../css/appheader";

function AppHeader() {
  return (
    <header>
      <AppBar
        component="nav"
        edge="start"
        aria-label="home button"
        position="relative"
        sx={appBarCss}
      >
        <Toolbar>
          <IconButton
            component={Link}
            to="/"
            edge="start"
            disableRipple
            sx={iconButtonCss}
          >
            <Logo />
          </IconButton>
          <Typography
            variant="h6"
            color="white"
            component="div"
            sx={typographyCss}
          >
            School of Witchcraft and Wizardry
          </Typography>

          <NavBtnsList />
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default AppHeader;
