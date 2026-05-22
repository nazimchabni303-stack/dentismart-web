"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  speed: number
  opacity: number
  fadeDelay: number
  fadeStart: number
  fadingOut: boolean
  reset: () => void
  update: () => void
  draw: (ctx: CanvasRenderingContext2D) => void
}

export function ParticleHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isGoldMode, setIsGoldMode] = useState(false)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)

  const createParticle = (canvas: HTMLCanvasElement): Particle => {
    const particle = {
      x: 0,
      y: 0,
      speed: 0,
      opacity: 1,
      fadeDelay: 0,
      fadeStart: 0,
      fadingOut: false,
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.speed = Math.random() / 5 + 0.1
        this.opacity = 1
        this.fadeDelay = Math.random() * 600 + 100
        this.fadeStart = Date.now() + this.fadeDelay
        this.fadingOut = false
      },
      update() {
        this.y -= this.speed
        if (this.y < 0) {
          this.reset()
        }

        if (!this.fadingOut && Date.now() > this.fadeStart) {
          this.fadingOut = true
        }

        if (this.fadingOut) {
          this.opacity -= 0.008
          if (this.opacity <= 0) {
            this.reset()
          }
        }
      },
      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `rgba(${255 - (Math.random() * 255) / 2}, 255, 255, ${this.opacity})`
        ctx.fillRect(this.x, this.y, 0.4, Math.random() * 2 + 1)
      },
    }

    particle.reset()
    particle.y = Math.random() * canvas.height
    particle.fadeDelay = Math.random() * 600 + 100
    particle.fadeStart = Date.now() + particle.fadeDelay
    particle.fadingOut = false

    return particle
  }

  const calculateParticleCount = (canvas: HTMLCanvasElement) => {
    return Math.floor((canvas.width * canvas.height) / 6000)
  }

  const initParticles = (canvas: HTMLCanvasElement) => {
    const particleCount = calculateParticleCount(canvas)
    particlesRef.current = []
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(createParticle(canvas))
    }
  }

  const animate = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particlesRef.current.forEach((particle) => {
      particle.update()
      particle.draw(ctx)
    })
    animationRef.current = requestAnimationFrame(() => animate(canvas, ctx))
  }

  const handleResize = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    initParticles(canvas)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    initParticles(canvas)
    animate(canvas, ctx)

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  const toggleGoldMode = () => {
    setIsGoldMode(!isGoldMode)
  }

  return (
    <div
      className={`relative h-[85vh] md:h-[100vh] w-full overflow-hidden ${isGoldMode ? "gold-mode" : ""}`}
      style={{ 
        background: "#0b1b33",
        fontSize: "max(calc(min(600px, 80vh) * 0.03), 10px)",
        WebkitFontSmoothing: "antialiased",
        textRendering: "optimizeLegibility",
        scrollBehavior: "smooth",
      }}
    >
      <style>{`
        .gold-mode .heroT h2,
        .gold-mode .heroP p {
          filter: invert(1) brightness(4.7);
        }
        .gold-mode .heroT h2 a {
          filter: hue-rotate(0deg);
        }
        .gold-mode canvas {
          filter: drop-shadow(2em 4em 0px #d8bd10) drop-shadow(-8em -14em 0px #d8bd10);
        }
        .gold-mode .spotlight {
          filter: invert(1) brightness(4.7) opacity(0.5) !important;
        }
        .gold-mode .mountains > div {
          box-shadow: 
            -1em -0.2em 0.4em -1.1em #c2ccff,
            inset 0em 0em 0em 2px #d8a910,
            inset 0.2em 0.3em 0.2em -0.2em #c2ccff,
            inset 10.2em 10.3em 2em -10em #d4e6ff2f;
        }
        .gold-mode .content-section,
        .gold-mode .content-section ::before,
        .gold-mode .content-section ::after {
          filter: invert(1) brightness(4.4) opacity(1);
        }
        .gold-mode .mid-spot {
          box-shadow: 0 0 1em 0 #d8bd10 !important;
        }
        .gold-mode .mid-spot:hover {
          box-shadow: -0.3em 0.1em 0.2em 0 #98c0ef !important;
        }

        @keyframes load {  
          0% { opacity: 0;}    
          100% { opacity: 1;}    
        }
        @keyframes up {      
          100% { transform: translateY(0); }    
        }
        @keyframes load3 {  
          0% { opacity: 0;}    
          100% { opacity: 0.7;}    
        }
        @keyframes pulse { 
          0% { --p: 0%; }
          50% { --p: 300%;}
          100% { --p: 300%;}
        }
        @keyframes colorize {
          0%{filter: hue-rotate(0deg); }
          100% {filter: hue-rotate(-380deg);}
        }
        @keyframes spotlight {
          0% {
            transform: rotateZ(0deg) scale(1);
            filter: blur(15px) opacity(0.5);
          }
          20% {
            transform: rotateZ(-1deg) scale(1.2);
            filter: blur(16px) opacity(0.6);
          }    
          40% {
            transform: rotateZ(2deg) scale(1.3);
            filter: blur(14px) opacity(0.4);
          }    
          60% {
            transform: rotateZ(-2deg) scale(1.2);
            filter: blur(15px) opacity(0.6);
          }    
          80% {
            transform: rotateZ(1deg) scale(1.1);
            filter: blur(13px) opacity(0.4);
          }    
          100% {
            transform: rotateZ(0deg) scale(1);
            filter: blur(15px) opacity(0.5);
          }    
        }
        @keyframes loadrot {
          0% { transform: rotate(0deg) scale(0);}
          100% { transform: scale(1);}
        }
        @keyframes accentload {
          0% { opacity: 0; transform: scale(0); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes accentload2 {
          0% { opacity: 0; transform: scale(0) rotate(360deg); }
          50% { transform: scale(0); }
          100% { opacity: 0.12; transform: scale(1) rotate(0deg); }
        }
        @keyframes accentload3 {
          0% { opacity: 0; transform: scale(0) rotate(-360deg); }
          50% { transform: scale(0); }
          100% { opacity: 0.12; transform: scale(1) rotate(0deg); }
        }

        @property --p {
          syntax: '<percentage>';
          inherits: false;
          initial-value: 0%;
        }
      `}</style>

      {/* Header */}
      <div
        className="header"
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          color: "#bad6f7",
          padding: "2em",
          position: "absolute",
          top: "80px", // Moved down to avoid overlapping with fixed Navbar
          left: 0,
          right: 0,
          margin: "0 auto",
          opacity: 0,
          transform: "translateY(-1em)",
          animation: "load 2s ease-in 2s forwards, up 1.4s ease-out 2s forwards",
          zIndex: 10,
        }}
      >
        <div
          className="mid-spot group"
          onClick={toggleGoldMode}
          title="Cliquez pour allumer la lumière"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: "1.8em",
            height: "1.8em",
            borderRadius: "50%",
            background: "black",
            boxShadow: "0 0 1em 0 #98c0ef",
            cursor: "pointer",
            transition: "box-shadow 1s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = isGoldMode
              ? "-0.3em 0.1em 0.2em 0 #98c0ef"
              : "-0.3em 0.1em 0.2em 0 #d8bd10"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = isGoldMode ? "0 0 1em 0 #d8bd10" : "0 0 1em 0 #98c0ef"
          }}
        />

        <div
          className="spotlight"
          style={{
            pointerEvents: "none",
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            margin: "0 auto",
            transition: "filter 1s ease-in-out",
            height: "100vh",
            width: "100%",
            overflow: "hidden",
            maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          }}
        >
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ position: "absolute", left: "50%", top: 0, width: 0, height: 0, zIndex: -1 }}>
              <div
                style={{
                  borderRadius: "0 0 50% 50%",
                  position: "absolute",
                  left: "-15em",
                  top: "3em",
                  width: "30em",
                  height: "max(42em, 86vh)",
                  backgroundImage:
                    "conic-gradient(from 0deg at 50% -5%, transparent 45%, rgba(124, 145, 182, .3) 49%, rgba(124, 145, 182, .5) 50%, rgba(124, 145, 182, .3) 51%, transparent 55%)",
                  transformOrigin: "50% 0",
                  filter: "blur(15px) opacity(0.5)",
                  transform: i === 0 ? "rotate(20deg)" : i === 1 ? "rotate(-20deg)" : "rotate(0deg)",
                  animation:
                    i === 0
                      ? "load 2s ease-in-out forwards, loadrot 2s ease-in-out forwards, spotlight 17s ease-in-out infinite"
                      : i === 1
                        ? "load 2s ease-in-out forwards, loadrot 2s ease-in-out forwards, spotlight 14s ease-in-out infinite"
                        : "load 2s ease-in-out forwards, loadrot 2s ease-in-out forwards, spotlight 21s ease-in-out infinite reverse",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        id="particleCanvas"
        style={{
          position: "absolute",
          pointerEvents: "none",
          animation: "load 0.4s ease-in-out forwards",
          zIndex: 1,
          width: "100%",
          height: "100%"
        }}
      />

      {/* Accent Lines */}
      <div
        className="accent-lines "
        style={{
          pointerEvents: "none",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "42em",
          zIndex: -2,
        }}
      >
        <div style={{ position: "absolute", top: 0, right: 0, left: 0, margin: "auto", height: "100%", width: "100%" }}>
          {[6, 11, 16, 24, 29].map((top, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: `${top}em`,
                right: 0,
                left: 0,
                margin: "auto",
                width: "100%",
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(186, 215, 247, .18), transparent)",
                opacity: 0,
                transform: "scale(0)",
                animation: "accentload 2s ease-out 2.4s forwards",
              }}
            />
          ))}
        </div>
        <div style={{ position: "absolute", top: 0, right: 0, left: 0, margin: "auto", height: "100%", width: "100%" }}>
          {[24, 34, -24, -34].map((left, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                left: left > 0 ? `${left}em` : "auto",
                margin: "auto",
                width: "1px",
                height: "100%",
                background: "rgba(186, 215, 247, .18)",
                opacity: 0,
                transform: "scale(0)",
                animation: "accentload 2s ease-out 2s forwards",
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero - centered content */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
          padding: "0 1.5rem",
          paddingTop: "10vh",
          pointerEvents: "none",
        }}
      >
        {/* Title */}
        <div
          className="heroT"
          style={{
            position: "relative",
            opacity: 0,
            animation: "load 2s ease-in-out 0.6s forwards",
            marginBottom: "clamp(1.5rem, 4vh, 3rem)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(3rem, 14vw, 7em)",
              fontWeight: 600,
              color: "#9dc3f7",
              textAlign: "center",
              background: `
                radial-gradient(2em 2em at 50% 50%,
                  transparent calc(var(--p, 0%) - 2em),
                  #fff calc(var(--p, 0%) - 1em), 
                  #fff calc(var(--p, 0%) - 0.4em), 
                  transparent var(--p, 0%) 
                ),
                linear-gradient(0deg, #bad1f1 30%, #9dc3f7 100%)
              `,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 2px 16px rgba(174,207,242,.24)",
              transition: "--p 3s linear",
              animation: "pulse 10s linear 1.2s infinite",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Dentismart
          </h2>
          {/* Blur glow behind text */}
          <h2
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              fontSize: "clamp(3rem, 14vw, 7em)",
              fontWeight: 600,
              textAlign: "center",
              background: `
                radial-gradient(2em 2em at 50% 50%,
                  transparent calc(var(--p, 0%) - 2em),
                  transparent calc(var(--p, 0%) - 1em),
                  #fff calc(var(--p, 0%) - 1em), 
                  #fff calc(var(--p, 0%) - 0.4em), 
                  transparent calc(var(--p, 0%) - 0.4em), 
                  transparent var(--p, 0%) 
                )
              `,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "blur(16px) opacity(0.4)",
              margin: 0,
              lineHeight: 1.1,
              pointerEvents: "none",
            }}
          >
            Dentismart
          </h2>
        </div>

        {/* Subtitle + Buttons */}
        <div
          className="heroP"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: 0,
            transform: "translateY(1em)",
            animation: "load 2s ease-out 2s forwards, up 1.4s ease-out 2s forwards",
          }}
        >
          <p className="text-center text-[#bad6f7] text-base sm:text-lg md:text-2xl font-medium drop-shadow-md mb-6 sm:mb-8 px-4">
            Clinique Dentaire & Technologie Avancée <br />
            <span className="text-sm md:text-lg opacity-70">Chéraga, Alger</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center pointer-events-auto">
            <a href="#contact" className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#d8ecf8] to-[#98c0ef] text-[#0b1b33] font-bold text-base sm:text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(152,192,239,0.3)]">
              Prendre Rendez-vous
            </a>
            <a href="#services" className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-[#98c0ef]/50 text-white font-semibold text-base sm:text-lg hover:bg-[#98c0ef]/20 transition-colors backdrop-blur-md bg-[#98c0ef]/15">
              Découvrir nos Soins
            </a>
          </div>
        </div>
      </div>

      {/* Seamless transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0b1b33] to-transparent pointer-events-none z-20" />
    </div>
  )
}
