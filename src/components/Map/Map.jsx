import { usePositionCoordsCtx } from "../../store/PositionCoordsCtxProvider";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

function Map() {
  const { positionCoords: position } = usePositionCoordsCtx();

  const myIcon = L.icon({
    iconUrl: "/my-icon.png",
    iconSize: [40, 40],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });

  return (
    <section className="z-0 my-6 lg:my-0">
      <MapContainer
        center={[position.lat, position.lon]}
        zoom={9}
        scrollWheelZoom={true}
        className="h-full shadow rounded-3xl min-h-64"
      >
        <ChangeView center={[position.lat, position.lon]} zoom={9} />
        <ClickLocation />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.pngg"
        />

        {/* var CartoDB_DarkMatterNoLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
              subdomains: 'abcd',
              maxZoom: 20
            }); */}
        <Marker position={[position.lat, position.lon]} icon={myIcon}>
          {/* <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup> */}
        </Marker>
      </MapContainer>
    </section>
  );
}

export default Map;

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function ClickLocation() {
  const { setPositionCoords: setPosition } = usePositionCoordsCtx();
  const map = useMapEvents({
    dblclick(e) {
      setPosition({ lat: e.latlng.lat, lon: e.latlng.lng });
    },
  });

  return;
}
