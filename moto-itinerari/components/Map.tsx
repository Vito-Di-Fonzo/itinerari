"use client";


import {
  MapContainer,
  TileLayer,
  useMap
} from "react-leaflet";


import "leaflet/dist/leaflet.css";

import "leaflet-gpx";

import { useEffect } from "react";



function GPXLayer({

  file

}:{

  file:string

}){


const map = useMap();



useEffect(()=>{


const gpx = new (window as any).L.GPX(

  file,

  {

    async:false,

    marker_options:{

      startIcon:false,

      endIcon:false,

      shadow:false

    },

    polyline_options:{

      color:"#e10600",

      weight:5,

      opacity:.9

    }


  }

);



gpx.on("loaded", function(e:any){

  map.fitBounds(e.target.getBounds());

});



gpx.addTo(map);



return()=>{

  map.removeLayer(gpx);

}


},[file,map]);



return null;


}




export default function Map({

posizione,

titolo,

gpx

}:{

posizione:[number,number];

titolo:string;

gpx:string;

}){


return (

<MapContainer

center={posizione}

zoom={8}

scrollWheelZoom={false}

style={{

height:"450px",

width:"100%",

borderRadius:"20px"

}}

>


<TileLayer

url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"

/>


<GPXLayer file={gpx}/>


</MapContainer>


);


}