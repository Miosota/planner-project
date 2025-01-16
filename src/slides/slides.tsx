import "./slides.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {Parallax, Controller, Mousewheel} from "swiper/modules";
import { useState } from "react";
import SwiperCore from "swiper";

SwiperCore.use([Controller]);

function Slides() {

    // const swiper = new Swiper('.swiper', {
    //     freeMode: true, 
    //     centeredSlides: true,
    //     mousewheel: true,
    //     parallax: true,
    //     breakpoints: {
    //         0: {
    //             slidesPerView: 2.5,
    //             spaceBetween: 20
    //         },
    //         680: {
    //             slidesPerView: 3.5, 
    //             spaceBetween: 60
    //         }
    //     }
    // })

    const[controlledSwiper, setControlledSwiper] = useState(null);

    return (
       <> 
        {/*Slider main container*/}
        <Swiper 
            freeMode={true}
            centeredSlides={true}
            parallax={true}
            breakpoints={{
                0: {
                slidesPerView: 2.5,
                spaceBetween: 20
            },
            680: {
                slidesPerView: 3.5, 
                spaceBetween: 60
            }
            }}
            modules={[Parallax, Controller, Mousewheel]}
            controller={{control: controlledSwiper}}
            mousewheel={true}
            className="swiper_main"    > 
            {/* Additional required wrapper */}           
            <div className="swiper-wrapper">
                {/*Slides*/}
                <SwiperSlide>
                    <div className="slides-item">
                        <div className="slide-img" data-swiper-parallax="20%" style={{backgroundImage: "url(/images/slides/4.jpg)"}}></div>
                    </div> 
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides-item">
                        <div className="slide-img" data-swiper-parallax="30%" style={{backgroundImage: "url(/images/slides/7.jpg)"}}></div>
                    </div> 
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides-item">
                        <div className="slide-img" data-swiper-parallax="20%" style={{backgroundImage: "url(/images/slides/1.jpg)"}}></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides-item">
                        <div className="slide-img" data-swiper-parallax="30%" style={{backgroundImage: "url(/images/slides/1.jpg)"}}></div>
                    </div> 
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides-item">
                        <div className="slide-img" data-swiper-parallax="20%" style={{backgroundImage: "url(/images/slides/1.jpg)"}}></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides-item">
                        <div className="slide-img" data-swiper-parallax="30%" style={{backgroundImage: "url(/images/slides/1.jpg)"}}></div>
                    </div> 
                </SwiperSlide>             
                 
                
            </div>
        </Swiper>


        {/*Slider background container*/}
        <Swiper 
            centeredSlides={true}
            parallax={true}
            spaceBetween={60}
            slidesPerView={3.5}
            modules={[Parallax, Controller]}
            onSwiper={setControlledSwiper}
            className="swiper_bg"    > 
            
            {/* Additional required wrapper */}           
            <div className="swiper-wrapper">
                {/*Slides*/}
                <SwiperSlide>
                    <div className="slides-item">
                        <div className="slide-img" data-swiper-parallax="20%" style={{backgroundImage: "url(/images/slides/4.jpg)"}}></div>
                    </div> 
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides-item">
                        <div className="slide-img" data-swiper-parallax="30%" style={{backgroundImage: "url(/images/slides/7.jpg)"}}></div>
                    </div> 
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides-item">
                        <div className="slide-img" data-swiper-parallax="20%" style={{backgroundImage: "url(/images/slides/1.jpg)"}}></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides-item">
                        <div className="slide-img" data-swiper-parallax="30%" style={{backgroundImage: "url(/images/slides/1.jpg)"}}></div>
                    </div> 
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides-item">
                        <div className="slide-img" data-swiper-parallax="20%" style={{backgroundImage: "url(/images/slides/1.jpg)"}}></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides-item">
                        <div className="slide-img" data-swiper-parallax="30%" style={{backgroundImage: "url(/images/slides/1.jpg)"}}></div>
                    </div> 
                </SwiperSlide>             
                 
                
            </div>
        </Swiper>
        </>
    );
}

export default Slides;
