import AboutBanner from "@/component/about/AboutBanner";
import AboutPart2 from "@/component/about/AboutPart2";
import AboutPart3 from "@/component/about/AboutPart3";
import AboutPart4 from "@/component/about/AboutPart4";
import AboutPart5 from "@/component/about/AboutPart5";

export default function page() {
  return (
    <div>
      <AboutBanner></AboutBanner>
      <div className="bg-black">
        <AboutPart2></AboutPart2>
        <AboutPart3></AboutPart3>
        <AboutPart4></AboutPart4>
        <AboutPart5></AboutPart5>
      </div>
    </div>
  );
}
