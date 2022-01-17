import React from "react";
import profilePic from "../images/blank_avatar.webp";

export default function Header(props) {
  const { name, jobTitle, phone, email } = props.data;
  console.log(props.data);
  return (
    <section className='section header'>
      <div className='header--details'>
        <h1 className='header--name'>{name}</h1>
        <h3 className='header--title'>{jobTitle}</h3>
        <p className='header--phone'>{phone}</p>
        <p className='header--email'>{email}</p>
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
