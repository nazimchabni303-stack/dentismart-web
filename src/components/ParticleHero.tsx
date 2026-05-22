"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  size: number
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
      size: 1,
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
        ctx.fillStyle = `rgba(14, 165, 233, ${this.opacity * 0.6})`
        // Taille fixe par particule pour éviter Math.random() à 60fps
        ctx.fillRect(this.x, this.y, 0.4, this.size)
      },
    }

    particle.reset()
    particle.y = Math.random() * canvas.height
    particle.size = Math.random() * 2 + 1
    particle.fadeDelay = Math.random() * 600 + 100
    particle.fadeStart = Date.now() + particle.fadeDelay
    particle.fadingOut = false

    return particle
  }

  const calculateParticleCount = (canvas: HTMLCanvasElement) => {
    // Réduire de 2x sur mobile pour performances
    const isMobile = window.innerWidth < 768
    const divisor = isMobile ? 14000 : 6000
    return Math.floor((canvas.width * canvas.height) / divisor)
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
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div
      className={`relative h-[85vh] md:h-[100vh] w-full overflow-hidden ${isGoldMode ? "gold-mode" : ""}`}
      style={{ 
        background: isGoldMode ? "#0f172a" : "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e0f2fe 100%)",
        transition: "background 1s ease-in-out",
        fontSize: "max(calc(min(600px, 80vh) * 0.03), 10px)",
        WebkitFontSmoothing: "antialiased",
        textRendering: "optimizeLegibility",
        scrollBehavior: "smooth",
      }}
    >
      <style>{`
        .gold-mode .heroT h2 span {
          background: linear-gradient(0deg, #d8bd10 30%, #fef08a 100%) !important;
          background-clip: text !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
        }
        .gold-mode .heroP p, .gold-mode .heroP p span {
          color: #d8bd10 !important;
          text-shadow: 0 0 15px rgba(216, 189, 16, 0.4);
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
        @keyframes draw-smile {
          to { stroke-dashoffset: 0; }
        }
        @keyframes up {      
          0% { transform: translateY(1em); }
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
        className="header absolute top-[120px] md:top-[110px] w-full flex justify-center z-10 opacity-0"
        style={{
          color: "#bad6f7",
          animation: "load 2s ease-in 2s forwards, up 1.4s ease-out 2s forwards",
        }}
      >
        {/* Toggle Switch Simple */}
        <div
          className="mid-spot group relative w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer z-50 transition-all duration-500 flex-shrink-0"
          onClick={toggleGoldMode}
          title="Cliquez pour allumer la lumière"
          style={{
            background: "black",
            boxShadow: isGoldMode ? "0 0 1em 0 #d8bd10" : "0 0 1em 0 #98c0ef",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)"
            e.currentTarget.style.boxShadow = isGoldMode
              ? "-0.2em 0.1em 0.2em 0 #d8bd10"
              : "-0.2em 0.1em 0.2em 0 #98c0ef"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)"
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
            opacity: 1,
            transition: "filter 1s ease-in-out, background-image 1s ease-in-out",
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
                  backgroundImage: isGoldMode 
                    ? "conic-gradient(from 0deg at 50% -5%, transparent 45%, rgba(124, 145, 182, .3) 49%, rgba(124, 145, 182, .5) 50%, rgba(124, 145, 182, .3) 51%, transparent 55%)"
                    : "conic-gradient(from 0deg at 50% -5%, transparent 45%, rgba(203, 213, 225, .3) 49%, rgba(203, 213, 225, .5) 50%, rgba(203, 213, 225, .3) 51%, transparent 55%)",
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
                background: "linear-gradient(90deg, transparent, rgba(14, 165, 233, .15), transparent)",
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
                background: "rgba(14, 165, 233, .15)",
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
          className="heroT flex flex-col items-center justify-center relative"
          style={{
            opacity: 0,
            animation: "load 1.2s ease-out 0.3s forwards",
            marginBottom: "clamp(1.5rem, 4vh, 3rem)",
          }}
        >
          <h2
            className="flex items-center"
            style={{
              fontFamily: "'Nunito', 'Segoe UI', sans-serif",
              fontSize: "clamp(3rem, 14vw, 7em)",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              margin: 0,
              lineHeight: 1,
            }}
          >
            {/* Lettres animées une par une */}
            {"Denti".split("").map((letter, i) => (
              <span
                key={`d-${i}`}
                className="inline-block text-slate-700 dark:text-white transition-colors duration-1000"
                style={{
                  opacity: 0,
                  transform: "translateY(0.3em)",
                  animation: `load 0.5s ease-out ${0.5 + i * 0.06}s forwards, up 0.5s ease-out ${0.5 + i * 0.06}s forwards`,
                }}
              >
                {letter}
              </span>
            ))}
            {"smart".split("").map((letter, i) => (
              <span
                key={`s-${i}`}
                className="inline-block text-[#0ea5e9]"
                style={{
                  opacity: 0,
                  transform: "translateY(0.3em)",
                  animation: `load 0.5s ease-out ${0.8 + i * 0.06}s forwards, up 0.5s ease-out ${0.8 + i * 0.06}s forwards`,
                }}
              >
                {letter}
              </span>
            ))}
          </h2>
          {/* Animated Smile SVG */}
          <svg 
            viewBox="0 0 400 60" 
            className="w-[70%] sm:w-[80%] max-w-[400px] mt-0 sm:mt-2 overflow-visible"
            style={{
              strokeDasharray: 400,
              strokeDashoffset: 400,
              animation: "draw-smile 1.5s cubic-bezier(0.16, 1, 0.3, 1) 1.5s forwards"
            }}
          >
            <path 
              d="M 20 15 Q 200 65 380 15" 
              fill="none"
              stroke="#0ea5e9"
              strokeWidth="14"
              strokeLinecap="round"
            />
          </svg>
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
          <p className="text-center text-slate-600 text-lg sm:text-2xl md:text-3xl font-medium mb-8 sm:mb-12 px-2 leading-snug sm:leading-relaxed transition-colors duration-1000 max-w-sm sm:max-w-3xl mx-auto">
            Clinique Dentaire & Technologie Avancée <br className="hidden sm:block" />
            <span className="text-sm sm:text-lg md:text-xl text-slate-500 mt-2 sm:mt-3 block transition-colors duration-1000">Chéraga, Alger</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center pointer-events-auto w-full px-6 sm:px-0">
            <a href="#contact" className="w-full sm:w-auto text-center px-6 sm:px-10 py-3 sm:py-5 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] text-white font-bold text-base sm:text-xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(14,165,233,0.5)]">
              Prendre Rendez-vous
            </a>
            <a href="#services" className="w-full sm:w-auto text-center px-6 sm:px-10 py-3 sm:py-5 rounded-full border-2 border-sky-500/30 text-sky-600 font-semibold text-base sm:text-xl hover:bg-sky-50 transition-colors backdrop-blur-md bg-white/50">
              Découvrir nos Soins
            </a>
          </div>
        </div>
      </div>

      {/* Seamless transition to next section */}
      <div className={`absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-50 dark:from-[#0b1b33] to-transparent pointer-events-none z-20 transition-colors duration-1000`} />
    </div>
  )
}
