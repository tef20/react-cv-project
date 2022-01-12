import React from "react";
import profilePic from "../images/blank_avatar.webp";

export default function Header() {
  return (
    <section className="section header">
      <div className='header--details'>
        <h1 className='header--name'>Joe Schmoe</h1>
        <h3 className='header--title'>Schmoe Consultant</h3>
        <p className='header--phone'>+447890123456</p>
        <p className='header--email'>schmoej@email.com</p>
      </div>
      <div className='header--profile-pic-container'>
        <img
          className='header--profile-pic'
          src={profilePic}
          alt='profile pic'
        />
      </div>
    </section>
  );
}
