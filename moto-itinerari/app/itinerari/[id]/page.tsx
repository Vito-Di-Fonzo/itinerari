import MapLoader from "@/components/MapLoader";
import { itinerari } from "@/data/itinerari";
import Link from "next/link";




export default async function ItinerarioPage({

  params,

}: {

  params: Promise<{ id:string }>

}) {


  const { id } = await params;


  const itinerario = itinerari.find(

    (item)=> item.id === id

  );



  if(!itinerario){

    return (

      <main className="page">

        <h1>
          Itinerario non trovato
        </h1>


        <Link href="/itinerari">

          Torna agli itinerari

        </Link>

      </main>

    );

  }



  return (

    <main className="detailPage">



      {/* COPERTINA */}

      <section

        className="detailHero"

        style={{

          backgroundImage:

          `linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.85)),url(${itinerario.immagine})`

        }}

      >


        <div>


          <span>

            {itinerario.regione}

          </span>



          <h1>

            {itinerario.titolo}

          </h1>



          <p>

            {itinerario.descrizione}

          </p>


        </div>


      </section>






      {/* DATI */}

      <section className="detailInfo">


        <div className="info-box">

          <span>
            KM
          </span>

          <strong>
            {itinerario.km}
          </strong>

        </div>



        <div className="info-box">

          <span>
            DURATA
          </span>

          <strong>
            {itinerario.durata}
          </strong>

        </div>



        <div className="info-box">

          <span>
            DIFFICOLTÀ
          </span>

          <strong>
            {itinerario.difficolta}
          </strong>

        </div>


      </section>







      {/* TAPPE */}


      <section className="detailSection">


        <h2>
          Tappe principali
        </h2>


        <ul>

          {itinerario.punti.map((punto)=>(

            <li key={punto}>

              {punto}

            </li>

          ))}

        </ul>


      </section>







      {/* GALLERIA */}


      <section className="detailSection">


        <h2>
          Galleria
        </h2>



        <div className="gallery">


          {itinerario.galleria.map((foto)=>(


            <img

              key={foto}

              src={foto}

              alt={itinerario.titolo}

            />


          ))}


        </div>


      </section>







      {/* MAPPA */}


      <section className="detailSection">


        <h2>
          Mappa percorso
        </h2>



<MapLoader

posizione={
itinerario.coordinate as [number,number]
}

titolo={
itinerario.titolo
}

gpx={
itinerario.gpx
}

/>


      </section>








      {/* DOWNLOAD GPX */}


      <section className="downloadBox">


        <h2>

          Scarica il percorso

        </h2>



        <a

          href={itinerario.gpx}

          download

        >

          Download GPX

        </a>


      </section>




    </main>

  );

}