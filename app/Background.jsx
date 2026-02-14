import Balatro from './Balatro.jsx';

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
      <Balatro
        spinRotation={-2} spinSpeed={7} color1="#514d4d" color2="#3e4041" color3="#000000"
        contrast={3.5} lighting={0.4} spinAmount={0.25} pixelFilter={100000}
      />
    </div>
  );
}