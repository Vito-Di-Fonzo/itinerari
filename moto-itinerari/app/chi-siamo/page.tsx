export default function ChiSiamo() {

return (

<main>


<section

style={{

minHeight:"60vh",

display:"flex",

alignItems:"center",

padding:"80px 30px",

background:

"linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.9)), url('/images/about.jpeg')",

backgroundSize:"cover",

backgroundPosition:"center"

}}

>


<div

style={{

maxWidth:"900px",

margin:"auto"

}}

>


<h1

style={{

fontSize:"clamp(45px,7vw,75px)",

textTransform:"uppercase",

letterSpacing:"3px"

}}

>

Chi siamo

</h1>


<p

style={{

fontSize:"22px",

color:"#ddd",

marginTop:"25px"

}}

>

Passione, strada e libertà.
Creiamo itinerari in moto pensati per chi vuole
scoprire nuovi luoghi senza perdere il piacere del viaggio.

</p>


</div>


</section>




<section

style={{

maxWidth:"1100px",

margin:"auto",

padding:"80px 30px"

}}

>


<h2

style={{

fontSize:"45px"

}}

>

La nostra filosofia

</h2>



<p

style={{

color:"#aaa",

fontSize:"20px",

lineHeight:"1.8",

marginTop:"25px"

}}

>

Un viaggio in moto non è solo raggiungere una destinazione.
Sono le curve, i panorami, i piccoli borghi e quei momenti
che rimangono impressi durante il percorso.

Per questo selezioniamo strade panoramiche,
percorsi emozionanti e itinerari studiati per essere vissuti
in sella alla propria moto.

</p>



<div

style={{

display:"grid",

gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",

gap:"30px",

marginTop:"60px"

}}

>


<Box

titolo="Percorsi studiati"

testo="Ogni itinerario viene selezionato valutando strade, panorami e punti di interesse."

/>


<Box

titolo="Esperienza reale"

testo="I nostri percorsi nascono dalla passione per il viaggio su due ruote."

/>


<Box

titolo="Avventure indipendenti"

testo="Scarica il percorso e vivi il viaggio secondo i tuoi tempi."

/>


</div>


</section>


</main>

);

}



function Box({

titolo,

testo

}:{

titolo:string;

testo:string;

}){


return (

<div

style={{

background:"#141414",

border:"1px solid #292929",

borderRadius:"15px",

padding:"30px"

}}

>


<h3

style={{

color:"#e10600",

marginBottom:"15px"

}}

>

{titolo}

</h3>


<p

style={{

color:"#aaa"

}}

>

{testo}

</p>


</div>

)

}