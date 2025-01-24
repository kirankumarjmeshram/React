import { useState, useEffect } from "react";
const useFetch = ({ url, option = {} }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      setError("URL is required");
      setLoading(false);
      return;
    }
    const fetchData = async () => {
      try {
        const response = await fetch(url, option);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
        setError(null);
        setLoading(false);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, option]);

  return { data, loading, error };
};

export default useFetch;
