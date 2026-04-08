"use client";
import React from 'react';

const MeshBackground = () => {
  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-black">
      {/* 1. Base Darkened Layer */}
      <div className="absolute inset-0 bg-[#050505] opacity-100" />

      {/* 2. Silver/White Drift - Main Glow */}
      <div 
        className="absolute top-[-20%] left-[-10%] w-[100vw] h-[100vw] rounded-full blur-[140px] opacity-40 animate-drift-fast"
        style={{ background: 'radial-gradient(circle, #ffffff 0%, rgba(255,255,255,0) 70%)' }}
      />

      {/* 3. Balatro Red Tint - Subtle High Contrast */}
      <div 
        className="absolute bottom-[-10%] right-[-5%] w-[80vw] h-[80vw] rounded-full blur-[160px] opacity-20 animate-drift-reverse-fast"
        style={{ background: 'radial-gradient(circle, #514d4d 0%, rgba(81,77,77,0) 75%)' }}
      />

      {/* 4. Electric Blue Shimmer - More Fluctuating */}
      <div 
        className="absolute top-[10%] right-[-10%] w-[90vw] h-[90vw] rounded-full blur-[130px] opacity-15 animate-swirl"
        style={{ background: 'radial-gradient(circle, #3e4041 0%, rgba(62,64,65,0) 70%)' }}
      />

      {/* 5. Center High-Light Pulse */}
      <div 
        className="absolute top-[35%] left-[25%] w-[60vw] h-[60vw] rounded-full blur-[180px] opacity-25 animate-ping-fast"
        style={{ background: 'radial-gradient(circle, #f3f4f6 0%, rgba(243,244,246,0) 65%)' }}
      />

      {/* 6. Subtle Balatro Primary Color Drift */}
      <div 
        className="absolute bottom-[20%] left-[-15%] w-[70vw] h-[70vw] rounded-full blur-[150px] opacity-10 animate-drift-mid-fast"
        style={{ background: 'radial-gradient(circle, #ffffff 0%, rgba(255,255,255,0) 70%)' }}
      />

      <style jsx global>{`
        @keyframes drift-fast {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(15vw, 10vh) scale(1.15); }
          66% { transform: translate(-10vw, 20vh) scale(0.85); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes drift-reverse-fast {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-15vw, -15vh) rotate(180deg) scale(1.2); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        @keyframes swirl {
          0% { transform: translate(0, 0) scale(1); filter: hue-rotate(0deg); }
          50% { transform: translate(10vw, -10vh) scale(1.1); filter: hue-rotate(15deg); }
          100% { transform: translate(0, 0) scale(1); filter: hue-rotate(0deg); }
        }
        @keyframes drift-mid-fast {
          0% { transform: translate(0, 0); }
          50% { transform: translate(-20vw, 15vh); }
          100% { transform: translate(0, 0); }
        }
        @keyframes ping-fast {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.4); opacity: 0.4; }
        }
        .animate-drift-fast {
          animation: drift-fast 7s infinite ease-in-out;
        }
        .animate-drift-reverse-fast {
          animation: drift-reverse-fast 9s infinite linear;
        }
        .animate-swirl {
          animation: swirl 11s infinite ease-in-out;
        }
        .animate-drift-mid-fast {
          animation: drift-mid-fast 8s infinite ease-in-out;
        }
        .animate-ping-fast {
          animation: ping-fast 5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default MeshBackground;
