import "./slides.scss";
import Swiper from "swiper";
import "swiper/css";

function Slides() {

    const swiper = new Swiper('.swiper', {
        freeMode: true, 
        centeredSlides: true,
        // breakpoints: {
        //     0: {
        //         slidesPerView: 2.5,
        //     }
        // }
    })

    return (
        //Slider main container
        <div className="swiper"> 
            {/* Additional required wrapper */}           
            <div className="swiper-wrapper">
                {/*Slides*/}
                <div className="swiper-slide">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla deserunt, perspiciatis dolore corrupti nam eos eligendi expedita aliquam ipsum error ullam iste corporis commodi minus exercitationem deleniti optio tempora veniam.</div>
                <div className="swiper-slide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non id iusto placeat culpa modi omnis sed aperiam quo doloremque, eius obcaecati a. Quo quam deserunt eaque ea labore, mollitia soluta.</div>
                <div className="swiper-slide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam accusantium architecto ullam! Delectus vero omnis voluptatibus laudantium laborum! Non minus fugiat eum, quisquam modi voluptatibus aspernatur odio nesciunt suscipit quam.</div>
                <div className="swiper-slide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolores maiores esse laborum, velit consequatur, quia doloremque dolorem voluptatibus, dolore illum excepturi amet maxime fugit nisi accusamus eum nam molestias.</div>
                <div className="swiper-slide">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nobis laboriosam excepturi sequi harum delectus quae quasi neque! Eum aperiam, animi corrupti quam minima vel culpa nulla accusantium saepe earum?</div>
            </div>
        </div>
    );
}

export default Slides;
