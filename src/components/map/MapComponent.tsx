import { GoogleMap, LoadScript } from "@react-google-maps/api";

const MapComponent = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "544px",
  };

  const center = {
    lat: 59.9342802, // Latitude for Saint Petersburg, Russia
    lng: 30.3350986, // Longitude for Saint Petersburg, Russia
  };

  return (
    <div >
      <LoadScript googleMapsApiKey="AIzaSyA9zgRugcGhA2AYFlh2c0kCPlIQGw3o7YI">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
          }}
        >
          {/* Additional markers or components can go here */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
