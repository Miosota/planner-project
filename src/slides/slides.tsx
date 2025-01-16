import "./slides.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {Parallax} from "swiper/modules";

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

    return (
        //Slider main container
        <Swiper 
            freeMode={true}
            centeredSlides={true}
            mousewheel={true}
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
            modules={[Parallax]}
            className="swiper"    > 
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
                        <div className="slide-img" data-swiper-parallax="20%" style={{backgroundImage: "url(/images/slides/1.jpg)"}}></div>
                    </div> 
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides-item">
                        <div className="slide-img" data-swiper-parallax="20%" style={{backgroundImage: "url(/images/slides/1.jpg)"}}></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides-item">
                        <div className="slide-img" data-swiper-parallax="20%" style={{backgroundImage: "url(/images/slides/1.jpg)"}}></div>
                    </div> 
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides-item">
                        <div className="slide-img" data-swiper-parallax="20%" style={{backgroundImage: "url(/images/slides/1.jpg)"}}></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides-item">
                        <div className="slide-img" data-swiper-parallax="20%" style={{backgroundImage: "url(/images/slides/1.jpg)"}}></div>
                    </div> 
                </SwiperSlide>             
                 
                
            </div>
        </Swiper>
    );
}

export default Slides;
