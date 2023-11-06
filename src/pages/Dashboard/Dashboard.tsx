import { FunctionComponent } from "react";
import { Grid } from "@mui/material";

interface OwnProps {}

type Props = OwnProps;

const Dashboard: FunctionComponent<Props> = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={9}>
        Map area
      </Grid>
      <Grid item xs={12} sm={3}>
        Details area
      </Grid>
    </Grid>
  );
};

export default Dashboard;
