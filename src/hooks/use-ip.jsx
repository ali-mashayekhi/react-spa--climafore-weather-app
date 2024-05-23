import { useQuery } from "@tanstack/react-query";

function useIp(geolocationError) {
  const coords = useQuery({
    queryKey: ["getCoordsByIp"],
    queryFn: getCoordsByIp,
    enabled: !!geolocationError,
  });

  return coords;
}

export default useIp;

async function getCoordsByIp() {
  const response = await fetch("http://ip-api.com/json/?fields=lat,lon");
  if (!response.ok) throw new Error("Something Goes Wrong");
  return response.json();
}
