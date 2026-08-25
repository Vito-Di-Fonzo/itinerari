"use client";

import Link from "next/link";
import { useState } from "react";


export default function Navbar() {

  console.log("NAVBAR ATTIVA");

  const [menu, setMenu] = useState(false);


  return (

    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 3000,
        background: "rgba(10,10,10,.95)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #e10600"
      }}
    >

      <nav
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "20px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >


        {/* LOGO */}

        <Link href="/">

          <h2
            style={{
              color: "#e10600",
              fontSize: "26px",
              fontWeight: 900,
              letterSpacing: "1px"
            }}
          >

            MOTO

            <span style={{ color: "white" }}>
              ITINERARI
            </span>

          </h2>

        </Link>



        {/* MENU DESKTOP */}

        <div className="desktopMenu">

          <Link href="/">
            HOME
          </Link>

          <Link href="/itinerari">
            ITINERARI
          </Link>

          <Link href="/chi-siamo">
            CHI SIAMO
          </Link>

          <Link href="/contatti">
            CONTATTI
          </Link>

        </div>




        {/* MENU MOBILE */}

        <button

          className="mobileButton"

          onClick={() => setMenu(!menu)}

          aria-label="Apri menu"

        >

          {menu ? "✕" : "☰"}

        </button>


      </nav>



      {/* DROPDOWN MOBILE */}

      {menu && (

        <div className="mobileMenu">


          <Link
            href="/"
            onClick={() => setMenu(false)}
          >
            HOME
          </Link>


          <Link
            href="/itinerari"
            onClick={() => setMenu(false)}
          >
            ITINERARI
          </Link>


          <Link
            href="/chi-siamo"
            onClick={() => setMenu(false)}
          >
            CHI SIAMO
          </Link>


          <Link
            href="/contatti"
            onClick={() => setMenu(false)}
          >
            CONTATTI
          </Link>


        </div>

      )}


    </header>

  );

}