"use client";

import { Container } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PeopleIcon from "@mui/icons-material/People";
import PublicIcon from "@mui/icons-material/Public";

export default function PositiveImpactSection() {

  const cards = [
    {
      title: "Legal Aid Access",
      icon: <EmojiEventsIcon />,
      description:
        "Connecting prisoners who cannot afford legal representation with volunteer lawyers and legal assistance."
    },
    {
      title: "Rehabilitation & Reintegration",
      icon: <PeopleIcon />,
      description:
        "Encouraging reform and preparing prisoners for successful reintegration into society."
    },
    {
      title: "Community Stability",
      icon: <PublicIcon />,
      description:
        "Promoting peace, responsibility, and productive citizenship for safer communities."
    }
  ];

  return (
    <section className="impact">

      <Container maxWidth="lg">

        <h2 className="title">
          Positive Impact to Community at Large
        </h2>

        <p className="subtitle">
          Through the work of SCPSF, post-released prisoners become reformed,
          rehabilitated and positive contributors to society.
        </p>

        <div className="cards">

          {cards.map((card, i) => (
            <div className="card" key={i}>

              <div className="icon">
                {card.icon}
              </div>

              <h3>{card.title}</h3>

              <p>{card.description}</p>

            </div>
          ))}

        </div>

      </Container>

      <style jsx>{`

        .impact{
          padding:120px 0;
          background:
          linear-gradient(180deg,#f8fafc,#eef2f7);
        }

        .title{
          text-align:center;
          font-size:36px;
          font-weight:800;
          margin-bottom:12px;

          background:linear-gradient(90deg,#1e3a8a,#2563eb,#0ea5e9);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .subtitle{
          text-align:center;
          max-width:720px;
          margin:0 auto 70px auto;
          color:#64748b;
          line-height:1.7;
          font-size:17px;
        }

        .cards{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:35px;
        }

        .card{

          padding:45px 35px;
          border-radius:22px;

          background:
          linear-gradient(145deg,#ffffff,#f1f5f9);

          box-shadow:
          0 20px 40px rgba(0,0,0,0.06);

          text-align:center;

          transition:all .35s ease;

          position:relative;
          overflow:hidden;
        }

        .card::before{

          content:"";

          position:absolute;
          inset:0;

          background:
          linear-gradient(120deg,
          transparent,
          rgba(255,255,255,0.5),
          transparent);

          opacity:0;
          transition:opacity .4s;
        }

        .card:hover{

          transform:translateY(-10px) scale(1.02);

          box-shadow:
          0 30px 70px rgba(0,0,0,0.12);
        }

        .card:hover::before{
          opacity:1;
        }

        .icon{

          width:65px;
          height:65px;

          margin:0 auto 20px auto;

          display:flex;
          align-items:center;
          justify-content:center;

          border-radius:16px;

          background:
          linear-gradient(135deg,#2563eb,#38bdf8);

          color:white;

          box-shadow:
          0 8px 20px rgba(59,130,246,.4);
        }

        h3{
          font-size:20px;
          margin-bottom:10px;
          font-weight:700;
          color:#0f172a;
        }

        p{
          font-size:15px;
          line-height:1.7;
          color:#475569;
        }

        @media(max-width:900px){

          .cards{
            grid-template-columns:1fr;
          }

        }

      `}</style>

    </section>
  );
}