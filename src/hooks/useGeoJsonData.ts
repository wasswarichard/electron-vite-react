import {useMemo, useState} from "react";
import readXlsxFile from "read-excel-file";
import { geocode, RequestType, setKey } from "react-geocode";

const useGeoJsonData = () => {
  const [geoJsonData, setGeoJsonData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  setKey("AIzaSyBd9OeEy1OrAMs-m6rdgr03rg0Dwgkv7mE");
  const getAddress = async (address: string) => {
    return geocode(RequestType.ADDRESS, address).then(({ results }) => {
      return results[0].geometry.location;
    });
  };

  const formatData = (rows: any[]) => {
    const mapsData: any[][] = [];
    rows.forEach(async (item: any) => {
      const location = `${item[8]} ${item[7]} ${item[6]} ${item[5]}`;
      const response = await getAddress(location);
      const data = [
        item[0],
        item[1],
        item[2],
        item[3],
        item[4],
        location,
        ...Object.keys(response).map((key) => response[key]),
      ];
      mapsData.push(data);
    });
    return mapsData;
  };
  useMemo(() => {
    setLoading(true);
    fetch("/data.xlsx")
      .then((response) => response.blob())
      .then(
        (blob) => readXlsxFile(blob),
        (error) => setError(error),
      )
      .then((rows: any) => {
        setGeoJsonData(formatData(rows));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { geoJsonData, loading, error };
};
export default useGeoJsonData;
