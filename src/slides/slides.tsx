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
                        <p className="slide-name">SLIDE 1</p>
                        <p className="slide-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nostrum esse quaerat magnam, repellat provident asperiores blanditiis. Alias nesciunt odio, numquam cum provident itaque tempora, assumenda, voluptatibus at officia maiores.</p>
                        <div className="slide-img" data-swiper-parallax="20%" style={{backgroundImage: "url(/public/images/slides/4.jpg)"}}></div>
                    </div> 
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides-item">
                        <p className="slide-name">SLIDE 2</p>
                        <p className="slide-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sit alias, deleniti, molestias sed corporis sunt natus obcaecati amet quaerat et quas repellendus vero consectetur laudantium recusandae ullam quae eius.</p>
                        <div className="slide-img" data-swiper-parallax="30%" style={{backgroundImage: "url(/public/images/slides/8.jpg)"}}></div>
                    </div> 
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides-item">
                        <p className="slide-name">SLIDE 3</p>
                        <p className="slide-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iusto dolorum adipisci molestiae laborum dignissimos recusandae maiores perspiciatis ab nemo provident ipsa quisquam quis iure amet corrupti, corporis quae odio!</p>
                        <div className="slide-img" data-swiper-parallax="20%" style={{backgroundImage: "url(/public/images/slides/7.jpg)"}}></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides-item">
                        <p className="slide-name">SLIDE 4</p>
                        <p className="slide-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iusto dolorum adipisci molestiae laborum dignissimos recusandae maiores perspiciatis ab nemo provident ipsa quisquam quis iure amet corrupti, corporis quae odio!</p>
                        <div className="slide-img" data-swiper-parallax="30%" style={{backgroundImage: "url(/public/images/slides/2.jpg)"}}></div>
                    </div> 
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides-item">
                        <p className="slide-name">SLIDE 5</p>
                        <p className="slide-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iusto dolorum adipisci molestiae laborum dignissimos recusandae maiores perspiciatis ab nemo provident ipsa quisquam quis iure amet corrupti, corporis quae odio!</p>
                        <div className="slide-img" data-swiper-parallax="20%" style={{backgroundImage: "url(/public/images/slides/5.jpg)"}}></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides-item">
                        <p className="slide-name">SLIDE 6</p>
                        <p className="slide-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iusto dolorum adipisci molestiae laborum dignissimos recusandae maiores perspiciatis ab nemo provident ipsa quisquam quis iure amet corrupti, corporis quae odio!</p>
                        <div className="slide-img" data-swiper-parallax="30%" style={{backgroundImage: "url(/public/images/slides/10.jpg)"}}></div>
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
