export default function TrainerPart1() {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-[20px] px-4 md:px-0 lg:px-0 md:mt-[50px] lg:mt-[100px]">
      {["t1.jpg", "t2.jpg", "t3.jpg", "t4.jpg"].map((src, index) => (
        <div
          key={index}
          className=" w-full lg:w-[346px] h-[300px] md:h-[350px] lg:h-[444px]"
        >
          <img src={`/${src}`} alt="" className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
}
