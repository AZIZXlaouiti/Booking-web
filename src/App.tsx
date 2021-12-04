import { scroll } from './animate'
import logo from "./assets/booking.png"
function App() {
  return (
    <>
    <header className="main-header">
      <section><div className='nav'> 
       <div className="nav-wrapper">
       <a href="/"><img  alt="hotels.com" width="250" src={logo}/></a>
      
          <nav className="main-nav">
        <ul className="main-list">
          <li className="main-list__item"><a href="" className="main-list__link">Write a Review</a></li>
          <li className="main-list__item"><a href="" className="main-list__link">Events</a></li>
          <li className="main-list__item"><a href="" className="main-list__link">Talk</a></li>
        </ul>
      </nav>
          <div className="logon-box">
        <ul className="logon-list">
          <li className="logon-list__item"><a href="" className="logon-list__link Login">Log In</a></li>
          <li className="logon-list__item"><a href="" className="logon-list__link SignUp">Sign Up</a></li>
        </ul>
      </div>
        </div>
        </div></section>
      <div className="main-header__wrapper">
      
        <div className="main-logo">
        <h1 className="css-1x9iesk">Going somewhere?</h1>
        </div>
        <div className="search">
          <div className="left-side">
            <input type="text" placeholder="tacos, cheap dinner, Max's" className="field request"/>
            <div className="field-wrapper">
                <span className="field-title find">Find</span>
            </div>
            <ul className="left-side__sublist">
              <li className="left-side__subitem"><a href="#" className="left-side__sublink restaraunts first">Restaurants</a></li>
              <li className="left-side__subitem"><a href="#" className="left-side__sublink bar">Breakfast &amp; Brunch</a></li>
              <li className="left-side__subitem"><a href="#" className="left-side__sublink coffee">Coffee &amp; tea</a></li>
              <li className="left-side__subitem"><a href="#" className="left-side__sublink delivery">Delivery</a></li>
              <li className="left-side__subitem"><a href="#" className="left-side__sublink takeout">Takeout</a></li>
              <li className="left-side__subitem"><a href="#" className="left-side__sublink reservations">Reservations</a></li>
            </ul>
          </div>
          <div className="right-side">
            <input type="text" placeholder="San Francisco, CA" className="field location"/>            
            <div className="field-wrapper">
              <span className="field-title near">Near</span>
            </div>
            <ul className="right-side__sublist">
              <li className="right-side__subitem"><a href="#" className="right-side__sublink current">Current Location</a></li>
              <li className="right-side__subitem"><a href="#" className="right-side__sublink state">San Francisco</a></li>
            </ul>
          </div>
          <a href="#" className="search-button">Search</a>
        </div>
   
        <div className="categories">
        <ul className="categories-list">
          <li className="categories-list__item">
            <img src="https://s3-media2.fl.yelpcdn.com/assets/srv0/svg_icons/aafb83c8f161/assets/sprite.png" alt="" width="18px" height="18px" className="categories-list__img restaurants-icon"/>
            <a href="#" className="categories-list__link">Restaurants</a>
          </li>
          <li className="categories-list__item">
            <img src="https://s3-media2.fl.yelpcdn.com/assets/srv0/svg_icons/aafb83c8f161/assets/sprite.png" alt="" width="18px" height="18px" className="categories-list__img nightlife-icon"/>
            <a href="#" className="categories-list__link">Nightlife</a>
          </li>
          <li className="categories-list__item">
            <img src="https://s3-media2.fl.yelpcdn.com/assets/srv0/svg_icons/aafb83c8f161/assets/sprite.png" alt="" width="18px" height="18px" className="categories-list__img services-icon"/>
            <a href="#" className="categories-list__link">Services</a>
          </li>
          <li className="categories-list__item">
            <img src="https://s3-media2.fl.yelpcdn.com/assets/srv0/svg_icons/aafb83c8f161/assets/sprite.png" alt="" width="18px" height="18px" className="categories-list__img delivery-icon"/>
            <a href="#" className="categories-list__link">Delivery</a>
          </li>
        </ul>
      </div>
   
      </div>
    </header>


    <button onClick={()=>scroll()}>scroll</button>
    </>
  );
}

export default App;
