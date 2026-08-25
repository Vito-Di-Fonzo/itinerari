export default function Contatti(){

return(

<main>


<section

style={{

padding:"100px 30px",

maxWidth:"1100px",

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

Contatti

</h1>



<p

style={{

fontSize:"20px",

color:"#aaa",

maxWidth:"700px",

marginTop:"20px"

}}

>

Hai bisogno di informazioni su un itinerario?
Vuoi proporre una collaborazione o semplicemente
raccontarci il tuo viaggio?

Scrivici.

</p>




<div

style={{

display:"grid",

gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",

gap:"50px",

marginTop:"60px"

}}

>



<div>


<h2>

Parliamo di moto

</h2>


<p

style={{

color:"#bbb",

lineHeight:"1.8",

marginTop:"20px"

}}

>

Email:

<br/>

info@motoitinerari.it

<br/><br/>

Seguici sui social per rimanere aggiornato
sui nuovi percorsi.

</p>


</div>





<form

style={{

display:"flex",

flexDirection:"column",

gap:"20px"

}}

>


<input

placeholder="Nome"

style={inputStyle}

/>


<input

placeholder="Email"

style={inputStyle}

/>


<textarea

placeholder="Messaggio"

rows={6}

style={inputStyle}

/>



<button

style={{

background:"#e10600",

color:"white",

border:"none",

padding:"16px",

borderRadius:"8px",

fontWeight:"bold",

cursor:"pointer"

}}

>

INVIA MESSAGGIO

</button>



</form>



</div>



</section>


</main>

)

}



const inputStyle={

background:"#141414",

border:"1px solid #333",

color:"white",

padding:"15px",

borderRadius:"8px",

fontSize:"16px"

};