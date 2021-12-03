import  $ from "jquery";
import 'slick-carousel/slick/slick'



export const scroll = () =>{
    (<any>$("#jsSlideshow")).css("--offset" , '+10');
    // .setProperty("--offset", 500 + "px")
}

export const auto = ()=>(<any>$('#jsSlideshow')).slick();

