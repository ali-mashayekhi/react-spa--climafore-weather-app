import useLocation from "../../../hooks/use-location";
import { usePositionCoordsCtx } from "../../../store/PositionCoordsCtxProvider";

function Location() {
  const { positionCoords } = usePositionCoordsCtx();
  const { data: location } = useLocation(positionCoords);
  const date = new Date();
  const dateString = `${date.getDate()} ${date.toLocaleString("default", {
    month: "short",
  })} ${date.getFullYear()}`;

  if (location) {
    return (
      <div className="flex items-center justify-between">
        <h2 className="flex items-center text-base font-bold text-center max-w-[70%]">
          <ion-icon className="text-lg" name="location"></ion-icon>
          <span className="ml-0 mr-1 text-left">
            {location.address.city ||
              location.address.town ||
              location.address.neighbourhood}
            ,
          </span>
          <span className="font-normal text-left text-gray-500">
            {location.address.country}
          </span>
        </h2>
        <p className="text-sm text-center text-gray-500">{dateString}</p>
      </div>
    );
  }
}

export default Location;
