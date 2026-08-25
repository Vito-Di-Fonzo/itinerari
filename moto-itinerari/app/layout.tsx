import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Oswald } from "next/font/google";


const oswald = Oswald({
  subsets:["latin"],
});


export const metadata: Metadata = {
  title:"MotoItinerari",
  description:"Itinerari in moto",
};


export default function RootLayout({
children,
}:{
children:React.ReactNode
}){

return(

<html lang="it">

<body className={oswald.className}>

<Navbar/>

{children}

<Footer/>

</body>

</html>

)

}