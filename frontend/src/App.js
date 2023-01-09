import { useEffect, useState } from "react";
import {Map,Marker,Popup} from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import {Room,Star} from "@material-ui/icons"
import './app.css'
import axios from 'axios'

function App() {
  const [viewport, setViewport] = useState({
    latitude: 20.5937,
    longitude:78.9629,
    zoom: 5,
  }); 
  const [showPopup, setShowPopup] = useState(true);
  const [pins,setPins]=useState([])
  useEffect(()=>{
    const getPins=async()=>{
        try {
          const res=await axios.get('/pins');
          setPins(res.data);
        } catch (err) {
          console.log(err)
        }
    };
    getPins()
  },[])

  return (
    <div className="App" style={{ height: "100vh", width: "100%" }}>
     <Map
    {...viewport}
    mapboxAccessToken={process.env.REACT_APP_MAPBOX}
    onMove={viewport => setViewport(viewport)}
    mapStyle="mapbox://styles/mapbox/streets-v9">
      
      {/* {pins.map(p=>(

        <>
          <Marker latitude={p.lat} longitude={p.long}   >
              <Room style={{fontSize:viewport.zoom * 7 ,color:"slateblue"}}></Room>
          </Marker>
          
          {showPopup && (
            <Popup  latitude={p.lat} longitude={p.long}
            anchor="left">
            <div className="card">
            <label>Place</label>
            <h4 className="place">{p.title}</h4>
            <label>Review</label>
            <p className="description">{p.desc}</p>
            <label>Rating</label>
            <div className="stars">
            <Star className="star"/>
            <Star className="star"/>
            <Star className="star"/>
            <Star className="star"/>
            <Star className="star"/>
            </div>
            <label>Information</label>
            <span className="username">Created by <b>{p.username}</b></span>
            <span className="date">1 hour ago</span>
            </div>
            </Popup>)}
        </>
      ))} */}
    </Map>
    ;
    </div>
  );
}

export default App;
