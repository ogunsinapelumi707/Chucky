import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet's CSS
import L from "leaflet";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster";
import logo from  "../../assets/logo2.png"

import { useSelector } from "react-redux";
// Fix marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

 const markerIcon = new L.Icon({
  iconUrl: logo,
  iconSize:[20, 30]
 })

const CustomerMap = () => {

  const {customerMap} = useSelector((state) => state.customerMap)

  return (
    <div className="">
      {/* Heading */}
      <h3 className="text-lg font-bold mb-2">Customer Map</h3>
      <hr className="border-gray-200 mb-4" />

      {/* Map Component */}
      <div className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] z-30">
        <MapContainer center={[37.7749, -122.4194]} zoom={5} scrollWheelZoom={false} className="h-full z-30 w-full">
          {/* TileLayer for the map background */}
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* Markers for customers */}
          {customerMap.map((customer, index) => (
            <Marker key={index} icon={markerIcon} position={[customer.lat, customer.lng]}>
              <Popup>
                <strong>{customer.name}</strong> <br />
                {customer.total} Customer
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default CustomerMap;
