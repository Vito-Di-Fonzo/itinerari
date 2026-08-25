import { itinerari } from "@/data/itinerari";
import ItineraryCard from "@/components/ItineraryCard";


export default function Page() {

  return (

    <main
      style={{
        padding:"80px 30px",
        maxWidth:"1200px",
        margin:"auto"
      }}
    >

      <h1
        style={{
          fontSize:"60px",
          textTransform:"uppercase",
          marginBottom:"20px"
        }}
      >
        Tutti gli itinerari
      </h1>


      <p
        style={{
          color:"#aaa",
          fontSize:"20px",
          marginBottom:"50px"
        }}
      >
        Scopri tutti i nostri percorsi in moto.
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


    </main>

  );

}