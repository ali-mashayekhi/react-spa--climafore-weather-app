import { useQuery } from "@tanstack/react-query";

function useWeather(positionCoords) {
  const weather = useQuery({
    queryKey: [["weatherData"], positionCoords],
    queryFn: () => fetchWeather(positionCoords),
    enabled: !!positionCoords,
    refetchOnMount: false,
  });

  return weather;
}

export default useWeather;

async function fetchWeather(positionCoords) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${
      positionCoords.lat
    },${positionCoords.lon}?key=${
      import.meta.env.VITE_VISUAL_CROSSING_API_KEY
    }&iconSet=icons1`
  );

  if (!response.ok) throw new Error("something went wrong!");
  return response.json();
}
