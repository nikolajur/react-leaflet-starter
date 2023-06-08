import { MapContainer, LayersControl, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import iconUrl from "../images/marker-icon.png";
import iconShadow from "../images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const { iconSize, shadowSize, iconAnchor, popupAnchor, tooltipAnchor } =
    L.Marker.prototype.options.icon.options;

  const defaultIcon = L.icon({
    iconUrl,
    iconShadow,
    iconSize,
    shadowSize,
    iconAnchor,
    popupAnchor,
    tooltipAnchor
  });

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <LayersControl position="topright">
        <LayersControl.BaseLayer name="OSM Streets" checked>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="ESRI World Imagery">
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
          />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay name="marker layer" checked>
          <Marker position={[51.505, -0.09]} icon={defaultIcon}>
            <Popup>Popup here.</Popup>
          </Marker>
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
};

export default Map;
