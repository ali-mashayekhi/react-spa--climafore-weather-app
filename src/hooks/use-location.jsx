import { useQueries, useQuery } from "@tanstack/react-query";

function useLocation(positionCoords) {
  let location;
  if (positionCoords instanceof Array) {
    if (positionCoords.length > 1) {
      location = useQueries({
        queries: positionCoords.map((position) => {
          return {
            queryKey: ["location", position],
            queryFn: () => fetchLocation(position),
            enabled: !!position,
            refetchOnMount: false,
          };
        }),
      });
    }
  } else {
    location = useQuery({
      queryKey: ["location", positionCoords],
      queryFn: () => fetchLocation(positionCoords),
      enabled: !!positionCoords,
      refetchOnMount: false,
    });
  }
  return location;
}

export default useLocation;

async function fetchLocation(positionCoords) {
  const response = await fetch(
    `https://us1.locationiq.com/v1/reverse?key=${
      import.meta.env.VITE_REVERSE_GEOCODING_API_KEY
    }&lat=${positionCoords.lat}&lon=${positionCoords.lon}&format=json&`
  );
  if (!response.ok) throw new Error("something went wrong!");
  return response.json();
}
