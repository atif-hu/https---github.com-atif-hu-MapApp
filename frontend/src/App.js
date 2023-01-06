import { useState } from "react";
import {Map,Marker} from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import {Room} from "@material-ui/icons"

function App() {
  const [viewport, setViewport] = useState({
    latitude: 20.5937,
    longitude:78.9629,
    zoom: 5,
  });

  return (
    <div className="App" style={{ height: "100vh", width: "100%" }}>
     <Map
    {...viewport}
    mapboxAccessToken={process.env.REACT_APP_MAPBOX}
    onMove={viewport => setViewport(viewport)}
    mapStyle="mapbox://styles/mapbox/streets-v9">
      

       <Marker latitude={27.1751} longitude={78.0421}   >
        <Room></Room>
     </Marker>
    </Map>
    ;
    </div>
  );
}

export default App;
