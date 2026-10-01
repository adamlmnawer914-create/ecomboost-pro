"use client";

export default function BackgroundDecoration() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* 1. Top-Left Diagonal Graphic Wave Swoosh (Blue & Gold) matching the banner corner */}
      <div className="absolute -top-12 -left-12 w-72 h-72 sm:w-96 sm:h-96">
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
          {/* Outer Yellow swoosh */}
          <path
            d="M-20 80 Q60 50 120 -20 L-20 -20 Z"
            fill="url(#goldGradient)"
          />
          {/* Inner Royal Blue swoosh */}
          <path
            d="M-20 120 Q80 70 140 -20 L110 -20 Q55 45 -20 70 Z"
            fill="url(#blueGradient)"
          />
          <defs>
            <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffc107" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="blueGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0047ba" />
              <stop offset="100%" stopColor="#0066ff" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 2. Soft Office / Studio Lighting & Radial Glow */}
      <div
        className="absolute top-0 right-1/4 w-[700px] h-[500px] rounded-full opacity-40 -z-10"
        style={{
          background: "radial-gradient(circle, rgba(185, 220, 255, 0.6) 0%, rgba(240, 246, 255, 0) 70%)",
        }}
      />

      {/* 3. Middle Flowing Dynamic Wave Ribbons across the background */}
      <div className="absolute top-[320px] left-0 right-0 h-[450px] opacity-35 -z-10">
        <svg
          viewBox="0 0 1440 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
        >
          {/* Flowing sky-blue wave */}
          <path
            d="M0,160 C320,300 520,60 840,190 C1160,320 1340,110 1440,160 L1440,450 L0,450 Z"
            fill="url(#softWaveGrad1)"
          />
          {/* Secondary bright ribbon wave */}
          <path
            d="M0,230 C280,100 600,310 960,180 C1240,80 1380,240 1440,210 L1440,450 L0,450 Z"
            fill="url(#softWaveGrad2)"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="softWaveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e3f0ff" />
              <stop offset="50%" stopColor="#cbe2fd" />
              <stop offset="100%" stopColor="#e8f3ff" />
            </linearGradient>
            <linearGradient id="softWaveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#bcd9fc" />
              <stop offset="100%" stopColor="#e0eeff" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 4. Bottom-Right Sweeping Yellow & Blue Curved Wave (matching above footer) */}
      <div className="absolute bottom-16 right-0 w-80 h-80 sm:w-[480px] sm:h-[480px] -z-10">
        <svg viewBox="0 0 300 300" className="w-full h-full" fill="none">
          {/* Sweeping blue curve */}
          <path
            d="M50 300 Q180 200 300 120 L300 300 Z"
            fill="#0056d6"
            opacity="0.15"
          />
          {/* Sweeping gold accent line */}
          <path
            d="M80 300 Q190 220 300 150"
            stroke="#fdb813"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.75"
          />
        </svg>
      </div>
    </div>
  );
}
