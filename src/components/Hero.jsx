import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [mouseX, setMouseX] = useState(0.5);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    const rect = heroRef.current?.getBoundingClientRect();

    if (!rect) return;

    const x = (e.clientX - rect.left) / rect.width;

    setMouseX(Math.max(0, Math.min(1, x)));
  };

  const handleMouseLeave = () => {
    setMouseX(0.5);
  };

  const splitPct = mouseX * 100;

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f4f0",
      }}
    >
      {/* LEFT BACKGROUND */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#efede8",
          clipPath: `polygon(0 0, ${splitPct}% 0, ${splitPct}% 100%, 0 100%)`,
          WebkitClipPath: `polygon(0 0, ${splitPct}% 0, ${splitPct}% 100%, 0 100%)`,
          transition: "clip-path 0.08s linear",
          zIndex: 1,
        }}
      />

      {/* RIGHT BACKGROUND */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#f5f4f0",
          zIndex: 0,
        }}
      />

      {/* DIVIDER */}
      <div
        style={{
          position: "absolute",
          left: `${splitPct}%`,
          top: 0,
          bottom: 0,
          width: "1px",
          background: "rgba(0,0,0,0.08)",
          transform: "translateX(-50%)",
          transition: "left 0.08s linear",
          zIndex: 5,
          pointerEvents: "none",
        }}
      />

      {/* MAIN CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1600px",
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 48vw 1fr",
          alignItems: "center",
          padding: "0 4vw",
        }}
      >
        {/* LEFT */}
        <div
          style={{
            paddingRight: "3vw",
            opacity: mounted ? 1 : 0,
            transform: mounted
              ? "translateX(0)"
              : "translateX(-40px)",
            transition:
              "opacity 1s ease 0.2s, transform 1s ease 0.2s",
          }}
        >
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(3rem, 5vw, 6.5rem)",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.05em",
              margin: "0 0 1.5rem",
              color: "#111",
              opacity: mouseX < 0.7 ? 1 : 0.25,
              transition: "opacity 0.35s ease",
            }}
          >
            designer
          </h1>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(0.9rem, 1vw, 1rem)",
              lineHeight: 1.8,
              color: "#666",
              maxWidth: "260px",
              opacity: mouseX < 0.7 ? 1 : 0.25,
              transition: "opacity 0.35s ease",
            }}
          >
            Product designer specialising in UI
            <br />
            design and design systems.
          </p>
        </div>

        {/* CENTER IMAGE */}
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            opacity: mounted ? 1 : 0,
            transform: mounted
              ? "translateY(0)"
              : "translateY(30px)",
            transition:
              "opacity 1s ease 0.05s, transform 1s ease 0.05s",
          }}
        >
          {/* CODE TEXT */}
          <div
            style={{
              position: "absolute",
              right: "3%",
              bottom: "10%",
              zIndex: 0,
              opacity: Math.max(0, (mouseX - 0.4) * 2),
              transition: "opacity 0.3s ease",
              pointerEvents: "none",
            }}
          >
            {[
              "<html>",
              "{height:184px;}",
              'div class="jedi"',
              "CSS3 HTML5",
              "color:#000;",
              "jQuery",
            ].map((text, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: i === 3 ? "1.8rem" : "0.85rem",
                  fontWeight: i === 3 ? 700 : 400,
                  color: `rgba(0,0,0,${0.06 + i * 0.03})`,
                  margin: "6px 0",
                  whiteSpace: "nowrap",
                }}
              >
                {text}
              </p>
            ))}
          </div>

          {/* IMAGE WRAPPER */}
          <div
            style={{
              position: "relative",
              width: "clamp(1240px, 42vw, 720px)",
              overflow: "hidden",
            }}
          >
            {/* LEFT IMAGE */}
            <img
              src="src/assets/Hero.png"
              alt="Designer"
              draggable={false}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                position: "relative",
                zIndex: 2,
                userSelect: "none",
                pointerEvents: "none",

                clipPath: `inset(0 ${100 - splitPct}% 0 0)`,
                WebkitClipPath: `inset(0 ${
                  100 - splitPct
                }% 0 0)`,

                transition: "clip-path 0.08s linear",
              }}
            />

            {/* RIGHT IMAGE */}
            <img
              src="src/assets/IMG_6288.JPG"
              alt="Coder"
              draggable={false}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 3,
                userSelect: "none",
                pointerEvents: "none",

                clipPath: `inset(0 0 0 ${splitPct}%)`,
                WebkitClipPath: `inset(0 0 0 ${splitPct}%)`,

                transition: "clip-path 0.08s linear",
              }}
            />
          </div>
        </div>

        {/* RIGHT */}
        <div
          style={{
            paddingLeft: "3vw",
            opacity: mounted ? 1 : 0,
            transform: mounted
              ? "translateX(0)"
              : "translateX(40px)",
            transition:
              "opacity 1s ease 0.3s, transform 1s ease 0.3s",
          }}
        >
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(3rem, 5vw, 6.5rem)",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.05em",
              margin: "0 0 1.5rem",
              fontStyle: "italic",
              color: "#111",
              opacity: mouseX > 0.3 ? 1 : 0.25,
              transition: "opacity 0.35s ease",
            }}
          >
            &lt;coder&gt;
          </h1>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(0.9rem, 1vw, 1rem)",
              lineHeight: 1.8,
              color: "#666",
              maxWidth: "260px",
              opacity: mouseX > 0.3 ? 1 : 0.25,
              transition: "opacity 0.35s ease",
            }}
          >
            Front end developer who writes
            <br />
            clean, elegant and efficient code.
          </p>
        </div>
      </div>

      {/* SCROLL */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "2rem",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          zIndex: 20,
          opacity: mounted ? 0.45 : 0,
          transition: "opacity 1.5s ease 1.8s",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#999",
          }}
        >
          Scroll
        </span>

        <div
          style={{
            width: "1px",
            height: "32px",
            background:
              "linear-gradient(to bottom, #999, transparent)",
            animation: "scrollAnim 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;700&family=DM+Mono:wght@400&display=swap');

        @keyframes scrollAnim {
          0%,100% {
            transform: scaleY(1);
            opacity: 0.4;
          }

          50% {
            transform: scaleY(0.6);
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
}