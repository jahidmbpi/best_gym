export default function TrainerPart1() {
  return (
    <div className="flex gap-4 mt-[100px]">
      {["t1.jpg", "t2.jpg", "t3.jpg", "t4.jpg"].map((src, index) => (
        <div key={index} className="w-[346px] h-[444px]">
          <img src={`/${src}`} alt="" className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
}
