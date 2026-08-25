"use client";

import dynamic from "next/dynamic";


const Map = dynamic(

()=>import("./Map"),

{

ssr:false

}

);



export default function MapLoader({

posizione,

titolo,

gpx

}:{

posizione:[number,number];

titolo:string;

gpx:string;

}){


return (

<Map

posizione={posizione}

titolo={titolo}

gpx={gpx}

/>

);


}