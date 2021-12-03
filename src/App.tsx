import { scroll } from './animate'
function App() {
  return (
    <>
<div className="center-marker">
  <div></div>
</div>
<div id="jsSlideshow" data-speed="5" data-transition="0.55" className="js-slideshow">
  <div className="js-slideshow__slides-wrapper">
    <div className="js-slideshow__slides">
      <img src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
      <img src="https://images.pexels.com/photos/953724/pexels-photo-953724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
      <img src="https://images.pexels.com/photos/3494806/pexels-photo-3494806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
      <img src="https://images.pexels.com/photos/973506/pexels-photo-973506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
      <img src="https://images.pexels.com/photos/1937555/pexels-photo-1937555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
      <img src="https://images.pexels.com/photos/3375493/pexels-photo-3375493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
      <img src="https://images.pexels.com/photos/2710282/pexels-photo-2710282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
      <img src="https://images.pexels.com/photos/258112/pexels-photo-258112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
      <img src="https://images.pexels.com/photos/3534156/pexels-photo-3534156.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
      <img src="https://images.pexels.com/photos/159613/ghettoblaster-radio-recorder-boombox-old-school-159613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
      <img src="https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
      
    </div>
  </div>
    <button onClick={()=>scroll()}>scroll</button>
</div>
    </>
  );
}

export default App;
