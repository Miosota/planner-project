import "./slides.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {Parallax, Controller, Mousewheel} from "swiper/modules";
import { useEffect, useState } from "react";
import SwiperCore from "swiper";

SwiperCore.use([Controller]);

function Slides() {

    const[controlledSwiper, setControlledSwiper] = useState(null);

    //open slide
    useEffect(() => {
        document.querySelectorAll('.swiper-slide').forEach(item => {
            item.addEventListener('click', (event) => {
                item.classList.toggle("flipped");
            })
        });
    });


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
            mousewheel={{
                enabled: true,
                releaseOnEdges: true
            }}
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
                        <div className="slide-img" data-swiper-parallax="30%" style={{backgroundImage: "url(/images/slides/8.jpg)"}}></div>
                    </div> 
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides-item">
                        <div className="slide-img" data-swiper-parallax="20%" style={{backgroundImage: "url(/images/slides/7.jpg)"}}></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides-item">
                        <div className="slide-img" data-swiper-parallax="30%" style={{backgroundImage: "url(/images/slides/2.jpg)"}}></div>
                    </div> 
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides-item">
                        <div className="slide-img" data-swiper-parallax="20%" style={{backgroundImage: "url(/images/slides/5.jpg)"}}></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides-item">
                        <div className="slide-img" data-swiper-parallax="30%" style={{backgroundImage: "url(/images/slides/10.jpg)"}}></div>
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
            modules={[Parallax, Controller, Mousewheel]}
            onSwiper={setControlledSwiper} 
            mousewheel={{
                enabled: true,
                releaseOnEdges: true
            }}
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
                        <div className="slide-img" data-swiper-parallax="30%" style={{backgroundImage: "url(/images/slides/8.jpg)"}}></div>
                    </div> 
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides-item">
                        <div className="slide-img" data-swiper-parallax="20%" style={{backgroundImage: "url(/images/slides/7.jpg)"}}></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides-item">
                        <div className="slide-img" data-swiper-parallax="30%" style={{backgroundImage: "url(/images/slides/2.jpg)"}}></div>
                    </div> 
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides-item">
                        <div className="slide-img" data-swiper-parallax="20%" style={{backgroundImage: "url(/images/slides/5.jpg)"}}></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides-item">
                        <div className="slide-img" data-swiper-parallax="30%" style={{backgroundImage: "url(/images/slides/10.jpg)"}}></div>
                    </div> 
                </SwiperSlide>             
                 
                
            </div>
        </Swiper>
        </>
    );
}

export default Slides;
