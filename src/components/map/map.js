import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { IoMdPin } from 'react-icons/io';
import Office, { OfficeBg } from './map.css';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function Map({ geo, marker, width, logo }) {
  const [state, setState] = useState({
    viewport: {
      width,
      height: 400,
      latitude: geo.lat,
      longitude: geo.lng,
      zoom: 14,
    },
  });

  return (
    <ReactMapGL
      mapboxApiAccessToken={
        'pk.eyJ1Ijoic3pva3Jpa2EiLCJhIjoiY2p2NzF0ZTQ5MGJnODRkbmxjdDFpaTg3cSJ9.2efE3uJEW98_Mwfz7_O54w'
      }
      {...state.viewport}
      onViewportChange={viewport => setState({ viewport })}
    >
      <Marker
        latitude={geo.lat}
        longitude={geo.lng}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <Office>
          <IoMdPin size={30} color="#a40000" />
          <OfficeBg>
            {logo && <img src={logo} alt={marker} height={50} />}
          </OfficeBg>
        </Office>
      </Marker>
    </ReactMapGL>
  );
}
