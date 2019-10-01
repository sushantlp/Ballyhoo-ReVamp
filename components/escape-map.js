import { compose } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

const MapWithAMarker = compose(
  withScriptjs,
  withGoogleMap
)(props => {
  const onClick = props.onClick.bind(this, props.marker);

  return (
    <GoogleMap
      defaultZoom={3}
      defaultCenter={{
        lat: 12.9716,
        lng: 77.5946
      }}
    >
      {props.markers.map((marker, key) => {
        return (
          <Marker
            onClick={onClick}
            key={key}
            position={{
              lat: parseFloat(marker.latitude),
              lng: parseFloat(marker.longitude)
            }}
          >
            {props.selectedMarker === marker && (
              <InfoWindow>
                <div>{marker.name}</div>
              </InfoWindow>
            )}
          </Marker>
        );
      })}
    </GoogleMap>
  );
});

export default MapWithAMarker;
