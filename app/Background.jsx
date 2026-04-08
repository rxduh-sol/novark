import MeshBackground from './MeshBackground';
// import Balatro from './Balatro.jsx';

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none overflow-hidden bg-black">
      <MeshBackground />

      {/* 
        Video Background and Balatro are preserved here but currently inactive.
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/usethisvidasbg.mp4" type="video/mp4" />
        </video>
        <Balatro ... />
      */}
    </div>
  );
}