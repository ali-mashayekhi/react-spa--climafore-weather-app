import { useQuery } from "@tanstack/react-query";
import { useTempUnitCtx } from "../store/tempUnit/TempUnitCtxProvider";
import { changeTempUnit } from "../lib/helpers";

function useWeather(positionCoords) {
  const { tempUnit } = useTempUnitCtx();

  const weather = useQuery({
    queryKey: [["weatherData"], positionCoords],
    queryFn: () => fetchWeather(positionCoords),
    enabled: !!positionCoords,
    refetchOnMount: false,
  });

  const formattedWeather = {
    data: {
      days: weather.data?.days.map((day, _, days) => {
        const date = new Date(day.datetime);
        const todayDate = new Date();

        // Setting hour object
        let hoursObject = [];
        let nextHours = [];
        if (date.getDate() === todayDate.getDate()) {
          const todayNextHours = day.hours.filter((hour) => {
            return +hour.datetime.slice(0, 2) > todayDate.getHours() + 1;
          });

          // Set nextHours array which has next 24 hours
          if (todayNextHours.length < 24) {
            const tommorrowNextHours = days[1].hours.slice(
              0,
              24 - todayNextHours.length
            );
            nextHours = todayNextHours.concat(tommorrowNextHours);
          } else nextHours = todayNextHours;
        } else {
          nextHours = day.hours;
        }

        hoursObject = day.hours.map((hour, index) => {
          const standardFormat =
            +nextHours[index].datetime.slice(0, 2) % 12 || 12;
          const twoDigitFormat =
            standardFormat <= 9
              ? `0${standardFormat}`
              : standardFormat.toString();

          return {
            temp: changeTempUnit(tempUnit, hour.temp),
            icon: hour.icon,
            dateTime: {
              hour: twoDigitFormat,
              amOrPm:
                +nextHours[index].datetime.slice(0, 2) >= 12 ? "PM" : "AM",
            },
          };
        });

        // Setting weather object
        return {
          conditions: day.conditions.indexOf(",")
            ? day.conditions.split(",")[0]
            : day.conditions,
          dateTime: formatDateTime(date),
          feelsLike: changeTempUnit(tempUnit, day.feelslike),
          hours: hoursObject,
          humidity: Math.round(day.humidity),
          icon: day.icon,
          sunrise: day?.sunrise,
          sunset: day?.sunset,
          temp: changeTempUnit(tempUnit, day.temp),
          tempMin: changeTempUnit(tempUnit, day.tempmin),
          uv: day.uvindex,
          windSpeed: Math.round(day.windspeed),
        };
      }),
    },

    isPending: weather.isPending,
    isError: weather.isError,
  };

  // console.log(formattedWeather);

  return formattedWeather;
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

function formatDateTime(date) {
  const currentDate = new Date();
  if (date.getDate() === currentDate.getDate()) return "Today";
  return `${
    date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`
  } ${date.toLocaleString("default", {
    month: "short",
  })}`;
}
