import { useContext } from "react";
import { context } from "../context/context";
import AnimatedText from "./AnimatedText";

const Home = () => {
  const { changeNav } = useContext(context);
  return (
    <div className="edrea_tm_section animated" id="home">
      <div className="section_inner">
        <div className="edrea_tm_home w-full h-auto clear-both float-left text-center">
          <h3 className="name text-white-color text-[72px] font-bold uppercase mb-[20px]">
            FACEIT<span className="text-pink-color">VISUALS</span>
          </h3>
          <h3 className="job text-[25px] font-medium text-main-color mb-[40px]">
            <AnimatedText />
          </h3>
          <div className="edrea_tm_button transition_link">
            <a href="#contact" onClick={() => changeNav("contact")}>
              Badges
            </a>
          </div>
          <div className="edrea_tm_button transition_link">
            <a
              href="https://chromewebstore.google.com/detail/faceit-visuals/ngcickocpcongeagbpkejabhkgmcildo"
              target="_blank"
              className="yourClassNameHere" // Add your class name here
            >
              Install on chrome
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
