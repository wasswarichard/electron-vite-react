import { geocode, RequestType, setKey } from "react-geocode";
import readXlsxFile from "read-excel-file";

export const getGeoJsonData = async () => {
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

  const response = await fetch("/data.xlsx");
  const blob = await response.blob();
  const rows = await readXlsxFile(blob);
  return formatData(rows);
};
