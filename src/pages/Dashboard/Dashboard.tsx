import { FunctionComponent } from "react";
import { Grid, Card, CardContent, Typography, TextField } from "@mui/material";
import ProfileCard from "../../components/ProfileCard.tsx";
import GoogleMap from 'google-map-react';

const googleapikey = import.meta.env.GOOGLE_API_KEY;


interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={8}>
        <GoogleMap
            style={{ flexGrow: 1 }}
            bootstrapURLKeys={{ key: googleapikey }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5">Registration Details</Typography>
            <TextField label="Search" />
            <ProfileCard />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
