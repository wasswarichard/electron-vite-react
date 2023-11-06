import { FunctionComponent } from "react";
import { Grid, Avatar, Typography } from "@mui/material";

interface OwnProps {}

type Props = OwnProps;

const ProfileCard: FunctionComponent<Props> = () => {
  return (
    <Grid container spacing={2} style={{ marginTop: "10px", border: "2px" }}>
      <Grid item xs={12} sm={4}>
        <Avatar alt="description" src="" />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Typography>
          Name:{" "}
          <span style={{ justifyContent: "space-between" }}>
            {" "}
            Ndimbigwe Jovia
          </span>
        </Typography>
        <Typography>
          Age: <span> 62</span>
        </Typography>
        <Typography>
          Gender: <span> F</span>
        </Typography>
        <Typography>
          NIN: <span> FRCJDFJDFKJK</span>
        </Typography>
        <Typography>
          <span> Kampala</span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProfileCard;
