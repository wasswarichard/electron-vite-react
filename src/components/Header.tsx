import { FunctionComponent } from "react";
import { AppBar, Typography, Grid } from "@mui/material";
interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <AppBar position="relative" style={{ height: "70px" }}>
      <Grid
        container
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          padding: "0 80px",
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h6" color="inherit" noWrap component="div">
            Registrants Dashboard
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
