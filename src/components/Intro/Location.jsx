import useLocation from "../../hooks/use-location";
import { usePositionCoordsCtx } from "../../store/PositionCoordsCtxProvider";

function Location() {
  const { positionCoords } = usePositionCoordsCtx();
  const { data: location } = useLocation(positionCoords);
  console.log(location);
  if (location) {
    return (
      <div className="flex items-center justify-between mb-4">
        <h2 className="flex items-center text-base font-bold text-center">
          <ion-icon className="text-lg" name="location"></ion-icon>
          <span className="ml-0 mr-1">{location.address.city},</span>
          <span className="font-normal text-gray-500">
            {location.address.country}
          </span>
        </h2>
        <p className="text-sm text-center text-gray-500">20 Jun 2024</p>
      </div>
    );
  }
}

export default Location;
