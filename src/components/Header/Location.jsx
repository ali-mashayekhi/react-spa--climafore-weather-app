import useLocation from "../../hooks/use-location";
import { usePositionCoordsCtx } from "../../store/PositionCoordsCtxProvider";

function Location() {
  const { positionCoords } = usePositionCoordsCtx();
  const { data: location } = useLocation(positionCoords);
  const date = new Date();
  const dateString = `${date.getDate()} ${date.toLocaleString("default", {
    month: "short",
  })} ${date.getFullYear()}`;

  if (location) {
    return (
      <div className="flex flex-row ">
        <ion-icon className="text-lg" name="location"></ion-icon>
        <div className="flex flex-col items-start justify-center">
          <h2 className="flex items-center text-base font-bold text-center ">
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
      </div>
    );
  }
}

export default Location;
