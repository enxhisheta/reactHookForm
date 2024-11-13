import { useState, useEffect } from "react";

interface Country {
  code: string;
  prefix: string;
  label: string;
}

interface ApiCountry {
  alpha2Code: string;
  callingCodes: string[];
  name: string;
}

export const useFetch = (url: string) => {
  const [state, setState] = useState<{
    data: Country[];
    loading: boolean;
    error: string | null;
  }>({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData: ApiCountry[] = await response.json();

        const transformedData = jsonData.map((country) => ({
          code: country.alpha2Code,
          prefix: country.callingCodes[0] ? `+${country.callingCodes[0]}` : "",
          label: country.name,
        }));

        setState({ data: transformedData, loading: false, error: null });
      } catch (err) {
        setState({
          data: [],
          loading: false,
          error: err instanceof Error ? err.message : "An error occurred",
        });
      }
    };

    fetchData();
  }, [url]);

  return state;
};
