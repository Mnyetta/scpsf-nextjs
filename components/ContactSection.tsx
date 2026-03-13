"use client";

import { Container } from "@mui/material";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <Container maxWidth="lg">

        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>SECOND CHANCE PRISONERS' SUPPORT FOUNDATION (SCPSF)</p>
        </div>

        <div className="contact-grid">

          <div className="contact-card">
            <h3>Organisation Information</h3>

            <p>
              The <strong>SECOND CHANCE PRISONERS’ SUPPORT FOUNDATION (SCPSF)</strong>
              is a non-governmental, non-profit, non-political and non-religious
              organisation registered under the Non-Governmental Organisation
              Act, Chapter 56 R.E 2023.
            </p>

            <h4>Scope of Operation</h4>
            <p>
              Northern Zone including:
              <br />
              Kilimanjaro, Tanga, Arusha and Manyara Regions.
            </p>

            <h4>Office Address</h4>
            <p>
              P.O. BOX 8847 Moshi
              <br />
              Plot No.44, Kiusa street
              <br />
              Kiusa Street, Kiusa Ward
            </p>

            <h4>Contact</h4>

            <p>
              📞 Mobile: 0621 197454
              <br />
              📧 Email: marymaliga73@gmail.com
            </p>

          </div>

          <div className="map-card">
            <h3>Our Office Location</h3>

            <iframe
              src="https://maps.google.com/maps?q=Moshi%20Tanzania&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              className="office-map"
            ></iframe>

          </div>

        </div>

      </Container>
    </section>
  );
}
