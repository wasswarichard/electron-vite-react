import { useState, useEffect } from "react";
import readXlsxFile from 'read-excel-file'
const useFetch = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true)
       fetch('/data.xlsx')
           .then((response) => response.blob())
           .then((blob) => readXlsxFile(blob) , (error) => setError(error))
           .then((rows: any) => {
               setData(rows);
           })
           .finally(() => {
               setLoading(false)
           })
    }, []);
    return {
        data,
        geoData: data?.splice(0, 1).map((geo: any) => geo),
        loading,
        error,
    };
}
export default useFetch;
