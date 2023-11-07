import React, {
  FunctionComponent,
  useCallback,
  useState,
  useEffect,
} from "react";
import { Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import ProfileCard from "../../components/ProfileCard.tsx";
import useGeoJsonData from "../../hooks/useGeoJsonData.ts";
import {
  GoogleMapsProvider,
  useGoogleMap,
} from "@ubilabs/google-maps-react-hooks";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import SuperClusterAlgorithm from "../../utils/superClusterAlgorithm.ts";

const defaultProps = {
  center: {
    lat: 0.312898,
    lng: 32.582599,
  },
  zoom: 10,
};
interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  const { geoJsonData } = useGeoJsonData();
  const [data, setData] = useState<any[]>([]);

  const googleMap: any = useGoogleMap();
  const [mapContainer, setMapContainer] = useState<HTMLDivElement | null>(null);

  const onLoad = useCallback((map: any) => addMarkers(map), []);

  useEffect(() => {
    if (geoJsonData.length > 0) {
      setData(geoJsonData);
    }
  }, [geoJsonData]);

  const addMarkers = (map: any) => {
    const infoWindow = googleMap.infoWindow();
    const markers = data.map(() => {
      const marker = googleMap.Marker({
        position: { lat: 1.3733, lng: 32.2903 },
      });
      marker.addListener("click", () => {
        infoWindow.setPosition({ lat: 1.3733, lng: 32.2903 });
        infoWindow.setContent(`
        <div class="info-window">
          <h2>Test</h2>
        </div>
      `);
        infoWindow.open({ map });
      });
      return marker;
    });

    new MarkerClusterer({
      markers,
      map,
      algorithm: new SuperClusterAlgorithm({ radius: 200 }),
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
                mapOptions={defaultProps}
                mapContainer={mapContainer}
                onLoadMap={onLoad}
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
