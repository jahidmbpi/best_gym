export default function Part2_extra() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center  gap-12 w-full max-w-[963px] mx-auto p-3">
      <div className="flex flex-col items-center text-center">
        <img
          className="w-[60px] h-[60px]"
          src="/timelogo.png"
          alt="24/7 Open"
        />
        <h2 className="text-2xl font-bold text-white">24/7 Open</h2>
      </div>
      <div className="flex flex-col items-center text-center">
        <img
          className="w-[60px] h-[60px]"
          src="/Vector.png"
          alt="Quality Equipment"
        />
        <h2 className="text-2xl font-bold text-white">Quality Equipment</h2>
      </div>
      <div className="flex flex-col items-center text-center">
        <img
          className="w-[60px] h-[60px]"
          src="/Group204.png"
          alt="Best Trainers"
        />
        <h2 className="text-2xl font-bold text-white">Best Trainers</h2>
      </div>
    </div>
  );
}
