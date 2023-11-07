import { FunctionComponent, useEffect, useState } from "react";
import { Grid, Card, CardContent, Typography, TextField } from "@mui/material";
import ProfileCard from "../../components/ProfileCard.tsx";
import GoogleMap from "google-map-react";
import useFetch from "../../hooks/useFetch.ts";

const googleapikey = import.meta.env.GOOGLE_API_KEY;

interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
    const {data, loading} =  useFetch();
    const [geoData, setGeoData] = useState<any[]>([]);

    useEffect(() => {
        if(!loading && data){
            setGeoData(() => data.map(result => {
                return [...result, 89899]
            }))
        }

    }, [data, loading]);


  const defaultProps = {
    center: {
      lat: 1.3733,
      lng: 32.2903,
    },
    zoom: 15,
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={8}>
        <div style={{ height: "100vh", width: "100%" }}>
          <GoogleMap
            bootstrapURLKeys={{
              key: googleapikey,
              libraries: ["drawing", "geometry", "places"],
            }}
            defaultCenter={defaultProps.center}
            yesIWantToUseGoogleMapApiInternals
            defaultZoom={defaultProps.zoom}
          />
        </div>
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
