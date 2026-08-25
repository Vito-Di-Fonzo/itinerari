export default function Features(){

return(

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

textTransform:"uppercase"

}}

>

Perché viaggiare con noi

</h2>


<div

style={{

marginTop:"50px",

display:"grid",

gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",

gap:"30px"

}}

>


<Card

titolo="Percorsi selezionati"

testo="Itinerari studiati da motociclisti per motociclisti."

/>


<Card

titolo="Tracce GPX"

testo="Scarica il percorso e seguilo direttamente dal navigatore."

/>


<Card

titolo="Avventure reali"

testo="Strade panoramiche, passi e luoghi da scoprire."

/>


</div>


</section>

)

}




function Card({

titolo,

testo

}:{

titolo:string;

testo:string;

}){


return(

<div

style={{

background:"#141414",

padding:"30px",

borderRadius:"15px",

border:"1px solid #262626"

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