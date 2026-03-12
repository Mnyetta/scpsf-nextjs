"use client";

import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {

  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [waveReady, setWaveReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWaveReady(true);
    }, 4200);
    return () => clearTimeout(timer);
  }, []);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const fullTitle = "SECOND CHANCE PRISONERS' SUPPORT FOUNDATION (SCPSF)";
  const shortTitle = "SCPSF";

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact" },
    { label: "Donate", href: "/donate" }
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(135deg,#020617,#0f172a,#020617)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(56,189,248,0.25)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
        paddingBottom: "16px",
        paddingTop: "6px",
        position: "relative",
        overflow: "hidden"
      }}
    >

      <Box className="navbar-loader-line"/>
      <Box className="navbarLightSweep"/>

      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "135px"
        }}
      >

        {/* LEFT SIDE */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link href="/" className="logoContainer">
            <div className="logoWrapper">
              <Image
                src="/logo/logo.jpg"
                alt="SCPSF Logo"
                width={82}
                height={82}
                className="logoGlow"
              />
              <span className="logoScan"></span>
            </div>
          </Link>

          <div className={`waveTitle ${waveReady ? "startWave" : ""}`}>
            <h2 className="desktopTitle">{fullTitle}</h2>
            <h2 className="desktopTitle">{fullTitle}</h2>
            <h2 className="mobileTitle">{shortTitle}</h2>
            <h2 className="mobileTitle">{shortTitle}</h2>
          </div>
        </Box>

        {/* DESKTOP MENU */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 3,
            alignItems: "center"
          }}
        >
          {navLinks.map((link, idx) => (
            <Button
              key={idx}
              component={Link}
              href={link.href}
              className={link.label === "Donate" ? "donateButton" : "navButton"}
              sx={{
                color: pathname === link.href ? "#38bdf8" : "#fff",
                fontWeight: pathname === link.href ? "bold" : "normal",
                textDecoration: "none"
              }}
            >
              {link.label}
              {pathname === link.href && link.label !== "Donate" && (
                <span className="activeIndicator"></span>
              )}
            </Button>
          ))}
        </Box>

        {/* MOBILE MENU */}
        <IconButton
          color="inherit"
          sx={{ display: { md: "none" } }}
          onClick={toggleDrawer}
        >
          <MenuIcon/>
        </IconButton>

      </Toolbar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
      >
        <Box
          sx={{
            width: 250,
            background: "#020617",
            height: "100%"
          }}
        >
          <List>
            {navLinks.map((link, idx) => (
              <ListItem key={idx} disablePadding>
                <ListItemButton
                  component={Link}
                  href={link.href}
                  onClick={toggleDrawer}
                >
                  <ListItemText
                    primary={link.label}
                    sx={{ color: pathname === link.href ? "#38bdf8" : "#fff" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* MOBILE SLOGAN + HEART WITH RIPPLE */}
          <Box className="mobileSlogan">
            <div className="heartContainer">
              <div className="ripple"></div>
              <div className="heartBeat">💙</div>
            </div>
            <p className="sloganText">
              Second Chance Prisoners Support Foundation<br/>
              Best Legal Aid Providers in Tanzania
            </p>
          </Box>

        </Box>
      </Drawer>

      <style jsx>{`

      /* Loader line */
      .navbar-loader-line{
        height:3px;
        background:linear-gradient(
          90deg,
          transparent,
          #38bdf8,
          #06b6d4,
          #38bdf8,
          transparent
        );
        background-size:300% 100%;
        animation:loaderMove 4s linear infinite;
      }

      @keyframes loaderMove{
        0%{background-position:-300px;}
        100%{background-position:300px;}
      }

      /* Light sweep */
      .navbarLightSweep{
        position:absolute;
        top:0;
        left:-50%;
        width:50%;
        height:100%;
        background:linear-gradient(
          120deg,
          transparent,
          rgba(56,189,248,0.25),
          transparent
        );
        transform:skewX(-25deg);
        animation:navSweep 8s linear infinite;
        pointer-events:none;
      }

      @keyframes navSweep{
        0%{left:-50%;}
        100%{left:120%;}
      }

      /* Menu buttons */
      .navButton{
        position:relative;
        font-size:1rem;
        letter-spacing:.6px;
        padding:12px 20px;
        transition:all .3s ease;
      }

      .navButton:hover{
        color:#38bdf8;
        text-shadow:0 0 10px #38bdf8;
      }

      /* Sliding indicator */
      .activeIndicator{
        position:absolute;
        bottom:-6px;
        left:0;
        height:2px;
        width:100%;
        background:#38bdf8;
        box-shadow:0 0 10px #38bdf8;
        transform-origin:left;
        animation:slideIndicator .35s ease forwards;
      }

      @keyframes slideIndicator{
        from{transform:scaleX(0);}
        to{transform:scaleX(1);}
      }

      /* Donate button */
      .donateButton{
        background:linear-gradient(135deg,#06b6d4,#38bdf8);
        color:#021018;
        font-weight:700;
        padding:10px 22px;
        border-radius:6px;
        box-shadow:0 0 20px rgba(56,189,248,0.6);
        transition:all .3s ease;
      }

      .donateButton:hover{
        transform:translateY(-2px);
        box-shadow:0 0 35px rgba(56,189,248,0.9);
      }

      /* Logo */
      .logoContainer{
        display:flex;
        align-items:center;
        cursor:pointer;
      }

      .logoWrapper{
        position:relative;
        border-radius:100%;
        overflow:hidden;
      }

      .logoGlow{
        width:82px;
        height:82px;
        border-radius:100%;
        object-fit:cover;
        box-shadow:0 0 18px #38bdf8,0 0 45px rgba(56,189,248,0.6);
        animation:logoFloat 4s ease-in-out infinite,logoPulse 3s ease-in-out infinite;
      }

      .logoScan{
        position:absolute;
        top:-120%;
        left:-50%;
        width:200%;
        height:250%;
        background:linear-gradient(120deg,transparent,rgba(255,255,255,.6),transparent);
        transform:rotate(25deg);
        animation:scanLogo 4s linear infinite;
      }

      @keyframes scanLogo{
        0%{top:-120%;}
        100%{top:120%;}
      }

      @keyframes logoFloat{
        0%{transform:translateY(0);}
        50%{transform:translateY(-5px);}
        100%{transform:translateY(0);}
      }

      @keyframes logoPulse{
        0%{box-shadow:0 0 15px #38bdf8,0 0 40px rgba(56,189,248,.5);}
        50%{box-shadow:0 0 30px #38bdf8,0 0 70px rgba(56,189,248,.9);}
        100%{box-shadow:0 0 15px #38bdf8,0 0 40px rgba(56,189,248,.5);}
      }

      /* Wave title */
      .waveTitle{
        position:relative;
        display:flex;
        align-items:center;
        margin-left:45px;
      }

      .waveTitle h2{
        position:absolute;
        font-size:1rem;
        font-weight:800;
        letter-spacing:1.5px;
        white-space:nowrap;
      }

      .waveTitle h2:nth-child(1),
      .waveTitle h2:nth-child(3){
        color:transparent;
        -webkit-text-stroke:1px rgba(255,255,255,0.9);
      }

      .waveTitle h2:nth-child(2),
      .waveTitle h2:nth-child(4){
        color:#38bdf8;
      }

      .startWave h2:nth-child(2),
      .startWave h2:nth-child(4){
        animation:wave 4s ease-in-out infinite;
      }

      @keyframes wave{
        0%,100%{
          clip-path:polygon(
            0 42%,13% 48%,26% 55%,41% 64%,56% 65%,69% 58%,84% 45%,100% 38%,100% 100%,0% 100%
          );
        }
        50%{
          clip-path:polygon(
            0 63%,14% 57%,25% 50%,40% 42%,56% 40%,71% 44%,84% 50%,100% 60%,100% 100%,0% 100%
          );
        }
      }

      /* Responsive titles */
      .desktopTitle{display:block;}
      .mobileTitle{display:none;}

      @media (max-width:900px){
        .waveTitle h2{font-size:0.8rem;}
      }

      @media (max-width:600px){
        .desktopTitle{display:none;}
        .mobileTitle{
          display:block;
          font-size:0.9rem;
        }
      }

      /* MOBILE SLOGAN + HEART */
      .mobileSlogan{
        display:none;
        text-align:center;
        padding:25px 15px;
        border-top:1px solid rgba(56,189,248,0.2);
        margin-top:10px;
      }

      @media (max-width:900px){
        .mobileSlogan{display:block;}
      }

      .heartContainer{
        position:relative;
        display:inline-block;
        width:50px;
        height:50px;
        margin:0 auto 10px auto;
      }

      .ripple{
        position:absolute;
        top:50%;
        left:50%;
        width:50px;
        height:50px;
        background:rgba(56,189,248,0.4);
        border-radius:50%;
        transform:translate(-50%, -50%) scale(0);
        animation:ripplePulse 1.4s infinite;
        pointer-events:none;
        z-index:0;
      }

      .heartContainer .heartBeat{
        position:relative;
        z-index:1;
        font-size:38px;
        color:#38bdf8;
        animation:heartBeat 1.4s infinite;
      }

      @keyframes heartBeat{
        0%{transform:scale(1);}
        25%{transform:scale(1.2);}
        40%{transform:scale(1);}
        60%{transform:scale(1.25);}
        100%{transform:scale(1);}
      }

      @keyframes ripplePulse{
        0%{transform:translate(-50%, -50%) scale(0); opacity:0.6;}
        50%{transform:translate(-50%, -50%) scale(1.2); opacity:0.2;}
        100%{transform:translate(-50%, -50%) scale(0); opacity:0;}
      }

      .sloganText{
        font-size:0.9rem;
        color:#38bdf8;
        line-height:1.5;
        font-weight:600;
        animation:sloganGlow 3s ease-in-out infinite;
      }

      @keyframes sloganGlow{
        0%{opacity:.7;text-shadow:0 0 5px #38bdf8;}
        50%{opacity:1;text-shadow:0 0 15px #38bdf8,0 0 30px #06b6d4;}
        100%{opacity:.7;text-shadow:0 0 5px #38bdf8;}
      }

      `}</style>
    </AppBar>
  );
}
