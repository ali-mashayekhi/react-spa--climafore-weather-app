import useImage from "../hooks/use-image";

export function farToCel(temp) {
  return Math.floor((temp - 32) * (5 / 9));
}

export function isDay(sunrise) {
  const currentTime = new Date();
  const splitedSunrise = sunrise.split(":");

  if (
    +currentTime.getHours() > +splitedSunrise[0] ||
    (+currentTime.getHours() === +splitedSunrise[0] &&
      +currentTime.getMinutes() > +splitedSunrise[1])
  )
    return true;
}

export function fixIconsNameDif(icon, sunrise = null) {
  if (icon === "fog") return "cloudy";
  // if (icon === "snow-showers-day") return "snow";
  // if (icon === "wind" && isDay(sunrise)) return "wind-day";
  // if (icon === "wind" && !isDay(sunrise)) return "wind-night";

  return icon;
}

export function setImageData(iconName, iconPath) {
  return {
    src: useImage(iconName, iconPath),
    alt: `${
      iconName.split("-") ? iconName.split("-").join(" ") : iconName
    } icon`,
  };
}

export function changeTempUnit(unit, temp) {
  return unit === "cel" ? farToCel(+temp) : Math.round(temp);
}
