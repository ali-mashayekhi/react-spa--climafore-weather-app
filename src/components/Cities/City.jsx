import useWeather from "../../hooks/use-weather";
import useLocation from "../../hooks/use-location";

function City({ positionCoords, onChangeActiveCity }) {
  const weather = useWeather(positionCoords);
  const { data: location } = useLocation(positionCoords);
  // console.log(location);

  // console.log(onChangeActiveCity);

  return (
    <li
      className="px-5 py-3 text-center bg-white shadow-md rounded-xl "
      onClick={() => onChangeActiveCity(positionCoords)}
    >
      <h3>
        {location?.address.city ||
          location?.address.town ||
          location?.address.neighbourhood ||
          location?.address.village ||
          location?.address.state}
      </h3>
      <h4 className="mb-2 text-xs"> {location?.address.country}</h4>

      {!weather.isPending && (
        <p className="text-xs">
          <span className="text-base">{weather?.data?.days[0]?.temp}</span>/
          {weather?.data?.days[0]?.tempMin}
        </p>
      )}
    </li>
  );
}

export default City;
