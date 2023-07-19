import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { context } from "../context/context";
import { portfolioSlider } from "../sliderProps";

const Portfolio = () => {
  const { showPortfolioPopup } = useContext(context);
  return (
    <div className="edrea_tm_section" id="portfolio">
      <div className="section_inner">
        <div className="edrea_tm_portfolio swiper-section w-full h-auto clear-both float-left">
          <div className="edrea_tm_main_title">
            <h3>
              TENARIS <span className="text-pink-color">Communities</span>
            </h3>
          </div>
          <div className="portfolio_list gallery_zoom w-full h-auto clear-both float-left pt-[60px]">
            <Swiper {...portfolioSlider} className="swiper-container">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="list_inner w-full h-auto clear-both float-left relative rounded-[10px] overflow-hidden">
                    <div className="image relative overflow-hidden">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/thumbs/1-1.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-center bg-cover scale-[1] transition-all duration-300"
                        data-img-url="assets/img/portfolio/1.jpg"
                      />
                    </div>
                    <div className="details absolute z-[2] bottom-[-100] left-[20px] bg-white-color px-[20px] py-[10px] rounded-[5px] transition-all duration-300">
                      <h3 className="text-black text-[15px] mb-[2px]">
                        Sweet Fruit
                      </h3>
                      <span className="text-[#777] text-[14px]">Vimeo</span>
                    </div>
                    <a
                      className="edrea_tm_full_link popup-vimeo"
                      href="https://vimeo.com/321091335"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="list_inner w-full h-auto clear-both float-left relative rounded-[10px] overflow-hidden">
                    <div className="image relative overflow-hidden">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/thumbs/1-1.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-center bg-cover scale-[1] transition-all duration-300"
                        data-img-url="assets/img/portfolio/2.jpg"
                      />
                    </div>
                    <div className="details absolute z-[2] bottom-[-100] left-[20px] bg-white-color px-[20px] py-[10px] rounded-[5px] transition-all duration-300">
                      <h3 className="text-black text-[15px] mb-[2px]">
                        Good Present
                      </h3>
                      <span className="text-[#777] text-[14px]">Youtube</span>
                    </div>
                    <a
                      className="edrea_tm_full_link popup-youtube"
                      href="https://www.youtube.com/watch?v=7e90gBu4pas"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="list_inner w-full h-auto clear-both float-left relative rounded-[10px] overflow-hidden">
                    <div className="image relative overflow-hidden">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/thumbs/1-1.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-center bg-cover scale-[1] transition-all duration-300"
                        data-img-url="assets/img/portfolio/3.jpg"
                      />
                    </div>
                    <div className="details absolute z-[2] bottom-[-100] left-[20px] bg-white-color px-[20px] py-[10px] rounded-[5px] transition-all duration-300">
                      <h3 className="text-black text-[15px] mb-[2px]">
                        Mockup Cream
                      </h3>
                      <span className="text-[#777] text-[14px]">
                        Soundcloud
                      </span>
                    </div>
                    <a
                      className="edrea_tm_full_link soundcloude_link mfp-iframe audio"
                      href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="list_inner w-full h-auto clear-both float-left relative rounded-[10px] overflow-hidden">
                    <div className="image relative overflow-hidden">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/thumbs/1-1.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-center bg-cover scale-[1] transition-all duration-300"
                        data-img-url="assets/img/portfolio/4.jpg"
                      />
                    </div>
                    <div className="details absolute z-[2] bottom-[-100] left-[20px] bg-white-color px-[20px] py-[10px] rounded-[5px] transition-all duration-300">
                      <h3 className="text-black text-[15px] mb-[2px]">
                        Delicious Apple
                      </h3>
                      <span className="text-[#777] text-[14px]">Detail</span>
                    </div>
                    <a
                      className="edrea_tm_full_link portfolio_popup"
                      href="#"
                      onClick={() => showPortfolioPopup()}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="list_inner w-full h-auto clear-both float-left relative rounded-[10px] overflow-hidden">
                    <div className="image relative overflow-hidden">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/thumbs/1-1.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-center bg-cover scale-[1] transition-all duration-300"
                        data-img-url="assets/img/portfolio/5.jpg"
                      />
                    </div>
                    <div className="details absolute z-[2] bottom-[-100] left-[20px] bg-white-color px-[20px] py-[10px] rounded-[5px] transition-all duration-300">
                      <h3 className="text-black text-[15px] mb-[2px]">
                       Faceit Clan
                      </h3>
                      <span className="text-[#777] text-[14px]">Image</span>
                    </div>
                    <a
                      className="edrea_tm_full_link zoom"
                      href="assets/img/portfolio/clan.png"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="list_inner w-full h-auto clear-both float-left relative rounded-[10px] overflow-hidden">
                    <div className="image relative overflow-hidden">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/thumbs/1-1.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-center bg-cover scale-[1] transition-all duration-300"
                        data-img-url="assets/img/portfolio/6.jpg"
                      />
                    </div>
                    <div className="details absolute z-[2] bottom-[-100] left-[20px] bg-white-color px-[20px] py-[10px] rounded-[5px] transition-all duration-300">
                      <h3 className="text-black text-[15px] mb-[2px]">
                        Sweet Cheery
                      </h3>
                      <span className="text-[#777] text-[14px]">Image</span>
                    </div>
                    <a
                      className="edrea_tm_full_link zoom"
                      href="assets/img/portfolio/6.jpg"
                    />
                  </div>
                </SwiperSlide>
              </div>
              <div className="edrea_tm_swiper_progress fill">
                <div className="my_pagination_in">
                  <span className="current" />
                  <span className="pagination_progress">
                    <span className="all">
                      <span />
                    </span>
                  </span>
                  <span className="total" />
                </div>
                <div className="my_navigation">
                  <ul>
                    <li>
                      <a className="my_prev" href="#">
                        <i className="icon-left-open-1" />
                      </a>
                    </li>
                    <li>
                      <a className="my_next" href="#">
                        <i className="icon-right-open-1" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
