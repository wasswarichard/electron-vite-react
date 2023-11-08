import React, { FunctionComponent, useCallback, useState } from "react";
import { Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import ProfileCard from "../../components/ProfileCard.tsx";
import { GoogleMapsProvider } from "@ubilabs/google-maps-react-hooks";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import geoJsonData from '../../data/trees.ts'

const mapOptions = {
  center: {
    lat: -1.2493132474566497,
    lng: 30.08346266342027,
  },
  zoom: 12,
};
interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  const [mapContainer, setMapContainer] = useState<HTMLDivElement | null>(null);
  const onLoad = useCallback(
    (map: any) => addMarkers(map, geoJsonData),
    [geoJsonData],
  );

  const addMarkers = (map: any, payload: any[]) => {
    const infoWindow = new google.maps.InfoWindow();
    const markers = payload.map(([name, ...rest]) => {
      const lng = rest[rest.length - 1];
      const lat = rest[rest.length - 2];
      const marker = new google.maps.Marker({ position: { lat, lng } });
      marker.addListener("click", () => {
        infoWindow.setPosition({ lat, lng });
        infoWindow.setContent(`
        <div class="info-window">
          <h2>${name}</h2>
        </div>
      `);
        infoWindow.open({ map });
      });
      return marker;
    });
    new MarkerClusterer({
      markers,
      map,
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={8}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <div style={{ height: "80vh", width: "100%" }}>
              <GoogleMapsProvider
                googleMapsAPIKey={"AIzaSyBd9OeEy1OrAMs-m6rdgr03rg0Dwgkv7mE"}
                mapOptions={mapOptions}
                mapContainer={mapContainer}
                onLoadMap={(map) => onLoad(map)}
              >
                <React.StrictMode>
                  <div
                    ref={(node) => setMapContainer(node)}
                    style={{ height: "80vh", width: "100%" }}
                  />
                </React.StrictMode>
              </GoogleMapsProvider>
            </div>
          </CardContent>
        </Card>
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
