import  $ from "jquery";

export const scroll = () =>{
    (<any>$("#jsSlideshow")).css("--offset" , '600px');
    // .setProperty("--offset", 500 + "px")
}