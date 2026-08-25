import { itinerari } from "@/data/itinerari";
import ItineraryCard from "./ItineraryCard";


export default function FeaturedItineraries() {

  return (

    <section
      style={{
        padding:"80px 30px",
        maxWidth:"1200px",
        margin:"auto"
      }}
    >

      <h2
        style={{
          fontSize:"45px",
          marginBottom:"15px",
          textTransform:"uppercase",
          letterSpacing:"2px"
        }}
      >
        Itinerari in evidenza
      </h2>


      <div
        style={{
          width:"80px",
          height:"4px",
          background:"#e10600",
          marginBottom:"40px"
        }}
      />


      <p
        style={{
          color:"#aaa",
          maxWidth:"700px",
          fontSize:"18px",
          marginBottom:"50px"
        }}
      >
        Scopri i nostri viaggi in moto: percorsi selezionati,
        strade panoramiche e avventure da vivere in sella.
      </p>


      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",
          gap:"35px"
        }}
      >

        {
          itinerari.map((itinerario)=>(

            <ItineraryCard
              key={itinerario.id}
              itinerario={itinerario}
            />

          ))
        }

      </div>


    </section>

  );

}