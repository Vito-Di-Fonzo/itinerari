import Link from "next/link";


type ItineraryProps = {

  itinerario:{
    id:string;
    titolo:string;
    regione:string;
    km:string;
    durata:string;
    difficolta:string;
    immagine:string;
    descrizione:string;
  }

};


export default function ItineraryCard({
  itinerario
}:ItineraryProps){


return (

<article className="itineraryCard">


<div className="itineraryImage">

<img

src={itinerario.immagine}

alt={itinerario.titolo}

/>

</div>



<div className="itineraryContent">


<span>

{itinerario.regione}

</span>



<h3>

{itinerario.titolo}

</h3>



<p>

{itinerario.descrizione}

</p>



<div className="itineraryInfo">

<div>

KM

<strong>

{itinerario.km}

</strong>

</div>


<div>

DURATA

<strong>

{itinerario.durata}

</strong>

</div>


<div>

DIFFICOLTÀ

<strong>

{itinerario.difficolta}

</strong>

</div>


</div>




<Link

href={`/itinerari/${itinerario.id}`}

className="itineraryButton"

>

Scopri percorso

</Link>



</div>


</article>

)

}