import { FunctionComponent } from "react";
import { Grid } from "@mui/material";
import Header from "./Header.tsx";

interface LayoutProps {
  children: JSX.Element;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={12} style={{ display: "flex" }}>
        <Header />
      </Grid>
      <Grid
        item
        xs={12}
        style={{ display: "flex", marginTop: "10px", padding: "0 80px" }}
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default Layout;
