import { useContext } from "react";
import { context } from "../context/context";
import AnimatedText from "./AnimatedText";

const About = () => {
  const { showAboutPopup } = useContext(context);
  return (
    <div className="edrea_tm_section" id="about">
      <div className="section_inner">
        <div className="edrea_tm_about w-full h-auto clear-both float-left flex">
          <div className="left w-[40%]">
            <div className="image relative">
              <div
                className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                data-img-url="assets/img/about/1.jpg"
              />
            </div>
          </div>
          <div className="right w-[60%] pl-[100px]">
            <div className="short w-full float-left mb-[24px] border-dashed border-[rgba(255,255,255,.15)] border-b pb-[30px]">
              <h3 className="name uppercase mb-[15px] text-[40px] font-bold">
                Florin <span className="text-pink-color">'shadi'</span>
              </h3>
              <h3 className="job text-[18px] font-normal text-main-color">
                <AnimatedText />
              </h3>
            </div>
            <div className="text w-full float-left mb-[36px]">
              <p>
                My name is <span className="text-white-color">Florin.</span> I
                am the creator of:{" "}
                <span className="text-white-color">FaceitVisuals</span>
              </p>
            </div>
            <div className="edrea_tm_button">
              <a href="#" onClick={() => showAboutPopup()}>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
