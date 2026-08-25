export default function Hero() {
  return (

    <section
      className="hero"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.85)), url('/images/hero.jpeg')"
      }}
    >

      <div>

        <h1 className="heroTitle">

          VIVI LA STRADA.
          <br />
          SCOPRI NUOVI ITINERARI.

        </h1>



        <p className="heroText">

          Percorsi in moto selezionati, strade panoramiche e
          avventure indimenticabili da scaricare e seguire
          sulla tua moto.

        </p>



        <a
          href="/itinerari"
          className="heroButton"
        >

          Scopri gli itinerari

        </a>


      </div>


    </section>

  );
}