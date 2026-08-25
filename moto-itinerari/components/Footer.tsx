import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#111",
        borderTop: "1px solid #c1121f",
        padding: "50px 30px",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* Logo e descrizione */}
        <div>
          <h2
            style={{
              color: "#c1121f",
              marginBottom: "15px",
            }}
          >
            MotoItinerari
          </h2>

          <p
            style={{
              color: "#aaa",
              maxWidth: "350px",
              lineHeight: "1.6",
            }}
          >
            Itinerari in moto, strade panoramiche e avventure da vivere
            chilometro dopo chilometro.
          </p>
        </div>

        {/* Link */}
        <div>
          <h3
            style={{
              marginBottom: "15px",
              color: "#fff",
            }}
          >
            Link
          </h3>

          <a
            href="/"
            style={{
              color: "#aaa",
              textDecoration: "none",
              display: "block",
              marginBottom: "10px",
            }}
          >
            Home
          </a>

          <a
            href="/itinerari"
            style={{
              color: "#aaa",
              textDecoration: "none",
              display: "block",
              marginBottom: "10px",
            }}
          >
            Itinerari
          </a>

          <a
            href="/contatti"
            style={{
              color: "#aaa",
              textDecoration: "none",
              display: "block",
            }}
          >
            Contatti
          </a>
        </div>

        {/* Social */}
        <div>
          <h3
            style={{
              marginBottom: "15px",
              color: "#fff",
            }}
          >
            Seguici
          </h3>

          <a
            href="https://www.instagram.com/borderless_bikexperience?igsh=djk1bjJncjY1NGV6"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#aaa",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaInstagram size={20} />
            @borderless_bikexperience
          </a>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          paddingTop: "25px",
          borderTop: "1px solid #333",
          color: "#777",
        }}
      >
        © 2026 MotoItinerari - Tutti i diritti riservati
      </div>
    </footer>
  );
}