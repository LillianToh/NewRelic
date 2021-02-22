import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

const Map = (props) => {
    const [viewport, setViewPort] = useState({
        lat: 36.7014631,
        long: -118.755997,
        width: "100vw",
        height: "100vh",
        zoom: 10
    });

    return (
        <div className='container'>
            <ReactMapGL></ReactMapGL>
        </div>
    );
}

export default Map;