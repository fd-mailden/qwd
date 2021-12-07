import React from "react";
import iconUser from "../assest/img/user.svg";
import iconSearch from "../assest/img/search.svg";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header_menu">
          <div className="menu_routing">
            <div className="menu_routing_link">
              <a href="">Home</a>
              <a href="">Featured collections</a>
              <a href="">My profile</a>
            </div>

            <div className="menu_routing_icon">
              <div className="icon">
                <img src={iconUser} alt="" />
              </div>
              <div className="icon">
                <img src={iconSearch} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="baner">
        <div className="baner_info">
          <div className="baner_info_content">
            <h1>Photo of the Day by guangxi liu</h1>
            <p>The internet’s source of freely usable images.</p>
            <p>Powered by creators everywhere.</p>
            <button>Explore All</button>
          </div>
        </div>

        <div className="baner_photo">
          <img
            className="reviews__photo"
            src="https://source.unsplash.com/random"
            alt=""
          />
        </div>
      </div>

      <div className="search_component">
        <div className="input_search">
          <input type="text" placeholder="Search for high-resolution photos" />
          <div>
         
            <img src={iconSearch} alt="" />
          </div>
        </div>
        <div className="search_component_link">
          <p>Trending</p>
          <ul>
            <li>
              <a href="">Nature</a>
            </li>
            <li>
              <a href="">Travel</a>
            </li>
            <li>
              <a href="">Animals</a>
            </li>
            <li>
              <a href="">Food</a>
            </li>
            <li>
              <a href="">Health</a>
            </li>
            <li>
              <a href="">Technology</a>
            </li>
            <li>
              <a href="">Events</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
