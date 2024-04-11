import { useContext } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { context } from "../../context/context";
import { testimonialSlider } from "../../sliderProps";
// import { testimonialSlider } from "../../sliderProps";
import AnimatedText from "../AnimatedText";
import Modal from "./Modal";

const AboutPopup = () => {
  const { showAboutPopup, aboutPopup, color } = useContext(context);

  const aboutData = {
    firstName: "Florin",
    lastName: "",
    bithday: "01.07.1996",
    address: "Milan, Italy",
    serviceLists: [
      "Website Development",
      "Esports Manager",
      "Product JuniorManager",
    ],
    skills: {
      programming: [
        { name: "WordPress", value: "95" },
        { name: "JavaScript", value: "75" },
        { name: "React", value: "60" },
        { name: "NextJS", value: "40" },
      ],
    },
    working: [
      {
        year: "2018 - active",
        company: "Freelance ",
        deg: "Developer",
      },

      { year: "2012 - 2015", company: "Inter Milano", deg: "Football Player" },
    ],
    partnersLogos: [
      "img/partners/1.png",
      "img/partners/2.png",
      "img/partners/3.png",
      "img/partners/4.png",
    ],
  };
  console.log(color);
  return (
    <Modal open={aboutPopup} close={showAboutPopup}>
      <div className="about_popup_details w-full h-full clear-both float-left relative">
        <div className="left fixed w-[40%] left-0 top-0 bottom-0 border-dashed border-[rgba(255,255,255,.1)] border-r z-[5]">
          <div className="left_inner w-full h-auto clear-both float-left relative px-[40px] py-[50px]">
            <div className="author w-full float-left mb-[35px] text-center overflow-hidden">
              <div className="avatar_image relative mt-0 mx-auto mb-[25px] max-w-[50%]">
                <img
                  className="relative opacity-0 min-w-full"
                  src="assets/img/thumbs/1-1.jpg"
                  alt=""
                />
                <div
                  className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                  data-img-url="assets/img/about/1.jpg"
                  style={{ backgroundImage: 'url("assets/img/about/1.jpg")' }}
                />
              </div>
              <div className="short w-full float-left">
                <h3 className="name text-[22px] uppercase mb-[7px]">
                  Florin <span className="text-pink-color"></span>
                </h3>
                <h3 className="job font-normal text-main-color text-[15px]">
                  <AnimatedText />
                </h3>
              </div>
            </div>
            <div className="list w-full float-left mb-[35px]">
              <ul className="m-0 list-none">
                <li className="w-full float-left border-dashed border-[rgba(255,255,255,.15)] border-b pb-[7px] mb-[7px]">
                  <div className="list_inner m-0 w-full float-left relative">
                    <i className="icon-user text-pink-color text-[16px] absolute left-0 top-1/2 translate-y-[-50%]" />
                    <span className="pl-[37px]">Florin</span>
                  </div>
                </li>

                <li className="w-full float-left">
                  <div className="list_inner m-0 w-full float-left relative">
                    <i className="icon-mail-1 text-pink-color text-[16px] absolute left-0 top-1/2 translate-y-[-50%]" />
                    <span className="pl-[37px]">
                      <a
                        className="no-underline text-white-color transition-all duration-300 hover:text-pink-color"
                        href="mailto:example@gmail.com"
                      >
                        shadi.dev@
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="edrea_tm_button full">
              <a href="assets/img/about/1.jpg" download="">
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div className="right w-full absolute pl-[40%] top-0 right-0 bottom-0">
          <div className="right_inner w-full h-auto clear-both float-left relative px-[40px] py-[50px]">
            <div className="biography w-full float-left mb-[55px]">
              <div className="about_title w-full float-left relative overflow-hidden border-dashed border-[rgba(255,255,255,.15)] border-b pb-[15px]">
                <h3 className="text-[18px] font-semibold">
                  <span className="text-white-color">
                    About <span className="text-pink-color">Me</span>
                  </span>
                </h3>
              </div>
              <div className="text mt-[29px] float-left">
                <p>
                  Hello everybody! My name is <span>Florin.</span> I am a
                  developer.
                </p>
              </div>
            </div>
            <div className="service w-full float-left mb-[55px]">
              <div className="about_title w-full float-left relative overflow-hidden border-dashed border-[rgba(255,255,255,.15)] border-b pb-[15px]">
                <h3 className="text-[18px] font-semibold">
                  <span className="text-white-color">
                    Quality <span className="text-pink-color">Services</span>
                  </span>
                </h3>
              </div>
              <div className="list w-full h-auto clear-both float-left mt-[20px]">
                <ul className="m-0 list-none">
                  <li className="mb-[8px] w-full float-left relative pl-[25px]">
                    <i className="icon-right-dir absolute left-[-7px] top-1/2 translate-y-[-50%] text-pink-color text-[16px] mt-[1px]" />
                    Website Development
                  </li>

                  <li className="mb-[8px] w-full float-left relative pl-[25px]">
                    <i className="icon-right-dir absolute left-[-7px] top-1/2 translate-y-[-50%] text-pink-color text-[16px] mt-[1px]" />
                    eSports Work
                  </li>
                  <li className="w-full float-left relative pl-[25px]">
                    <i className="icon-right-dir absolute left-[-7px] top-1/2 translate-y-[-50%] text-pink-color text-[16px] mt-[1px]" />
                    Player
                  </li>
                </ul>
              </div>
            </div>
            <div className="prog_skill w-full float-left mb-[62px]">
              <div className="about_title w-full float-left relative overflow-hidden border-dashed border-[rgba(255,255,255,.15)] border-b pb-[15px]">
                <h3 className="text-[18px] font-semibold">
                  <span className="text-white-color">
                    Programming <span className="text-pink-color">Skills</span>
                  </span>
                </h3>
              </div>
              <div className="oki_progress">
                <div className="progress_inner" data-value={95}>
                  <span>
                    <span className="label">WordPress</span>
                    <span className="number">95%</span>
                  </span>
                  <div className="background">
                    <div className="bar open">
                      <div className="bar_in" style={{ width: "95%" }} />
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value={80}>
                  <span>
                    <span className="label">JavaScript</span>
                    <span className="number">80%</span>
                  </span>
                  <div className="background">
                    <div className="bar open">
                      <div className="bar_in" style={{ width: "80%" }} />
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value={90}>
                  <span>
                    <span className="label">React</span>
                    <span className="number">65%</span>
                  </span>
                  <div className="background">
                    <div className="bar open">
                      <div className="bar_in" style={{ width: "65%" }} />
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value={90}>
                  <span>
                    <span className="label">NextJSt</span>
                    <span className="number">40%</span>
                  </span>
                  <div className="background">
                    <div className="bar open">
                      <div className="bar_in" style={{ width: "40%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline w-full float-left mb-[55px]">
              <div className="about_title w-full float-left relative overflow-hidden border-dashed border-[rgba(255,255,255,.15)] border-b pb-[15px]">
                <h3 className="text-[18px] font-semibold">
                  <span className="text-white-color">
                    Working <span className="text-pink-color">Timeline</span>
                  </span>
                </h3>
              </div>
              <div className="list w-full h-auto clear-both float-left mt-[45px]">
                <ul className="m-0 list-none relative inline-block pt-[10px]">
                  <li className="m-0 w-full float-left relative pl-[20px] pb-[45px]">
                    <div className="list_inner w-full h-auto clear-both flex relative">
                      <div className="time w-1/2 pr-[15px]">
                        <span className="inline-block px-[25px] py-[5px] bg-[rgba(255,255,255,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                          2018 - active
                        </span>
                      </div>
                      <div className="place w-1/2 pl-[15px]">
                        <h3 className="text-[15px] mb-[2px]">Freelance</h3>
                        <span className="text-[14px]">Developer</span>
                      </div>
                    </div>
                  </li>

                  <li className="m-0 w-full float-left relative pl-[20px]">
                    <div className="list_inner w-full h-auto clear-both flex relative">
                      <div className="time w-1/2 pr-[15px]">
                        <span className="inline-block px-[25px] py-[5px] bg-[rgba(255,255,255,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                          2012 - 2015
                        </span>
                      </div>
                      <div className="place w-1/2 pl-[15px]">
                        <h3 className="text-[15px] mb-[2px]">Inter Milano</h3>
                        <span className="text-[14px]">Football Player</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="partners w-full float-left mb-[62px]">
              <div className="about_title w-full float-left relative overflow-hidden border-dashed border-[rgba(255,255,255,.15)] border-b pb-[15px]">
                <h3 className="text-[18px] font-semibold">
                  <span className="text-white-color">
                    My <span className="text-pink-color">Partners</span>
                  </span>
                </h3>
              </div>
              <div className="list w-full float-left clear-both overflow-hidden border-solid border-[#333] border mt-[40px]">
                <ul className="mt-[-2px] mr-[-10px] mb-[-2px] ml-[-2px] list-none pt-[2px] float-left">
                  <li className="float-left w-1/2 border-solid border-[#333] border text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden">
                    <div className="list_inner w-full h-auto clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100">
                      <img
                        className="max-w-[65%] max-h-[65px]"
                        src="assets/img/partners/1.png"
                        alt=""
                      />
                    </div>
                  </li>
                  <li className="float-left w-1/2 border-solid border-[#333] border text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden">
                    <div className="list_inner w-full h-auto clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100">
                      <img
                        className="max-w-[65%] max-h-[65px]"
                        src="assets/img/partners/2.png"
                        alt=""
                      />
                    </div>
                  </li>
                  <li className="float-left w-1/2 border-solid border-[#333] border text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden">
                    <div className="list_inner w-full h-auto clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100">
                      <img
                        className="max-w-[65%] max-h-[65px]"
                        src="assets/img/partners/3.png"
                        alt=""
                      />
                    </div>
                  </li>
                  <li className="float-left w-1/2 border-solid border-[#333] border text-center h-[130px] leading-[130px] relative mt-[-2px] ml-[-2px] overflow-hidden">
                    <div className="list_inner w-full h-auto clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100">
                      <img
                        className="max-w-[65%] max-h-[65px]"
                        src="assets/img/partners/4.png"
                        alt=""
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default AboutPopup;
