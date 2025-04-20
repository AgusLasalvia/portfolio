export default function StarsBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      <div className="w-full h-full bg-[radial-gradient(white_1px,transparent_1px)] [background-size:10px_10px] animate-twinkle" />
    </div>
  );
}
