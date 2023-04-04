import React, { useState } from "react";
import "./main.css";

import { BiArrowBack } from "react-icons/bi";
import { CgMoreAlt, CgCalendarDates } from "react-icons/cg";

import Tweet from "../tweet/Tweet";

const Main = () => {
  const [follow, setFollow] = useState(true);

  console.log(follow);

  const followHandler = () => {
    if (follow === true) {
      setFollow(false);
    } else if (follow === false) {
      setFollow(true);
    }
  };

  return (
    <div id="container-main">

        <div id="box-top">
          <span id="back-icon-box">
            <BiArrowBack id="back-icon" />
          </span>

          <div id="box-top-right">
            <p id="name-header">Pulkit Kumar</p>
            <span id="tweets-number">22 Tweets</span>
          </div>
        </div>


      <div id="header-box">
        <div id="profile-image"></div>
      </div>

      <div id="edit-box">
        <span id="more-box">
          <CgMoreAlt id="more-header" />
        </span>
        <button
          className={follow === false ? "following" : "Follow"}
          onClick={followHandler}
        >
          {follow ? "Follow" : "Following"}
        </button>
      </div>

      <div id="name-id-box">
        <p id="name-user">Pulkit Kumar</p>
        <p id="id-user">@pulkitKumar</p>
      </div>

      <div id="job-box">
        <p id="job">Frontend Developer</p>
      </div>

      <div id="date-box">
        <CgCalendarDates id="date-icon" />
        <p id="date">Joined January 2023</p>
      </div>

      <div id="following-follow-box">
        <span id="number-follow">35</span>
        <a href="" id="follow-text" onClick={(e) => e.preventDefault()}>
          Following
        </a>

        <span id="number-follow" className="margin-left">
          {follow === false ? 6 : 5}
        </span>
        <a href="" id="follow-text" onClick={(e) => e.preventDefault()}>
          Followers
        </a>
      </div>

      <div id="nav-header">
        <div id="box-nav" className="box-Tweets">
          <p id="nav">Tweets</p>
        </div>

        <div id="box-nav" className="box-replies">
          <p id="nav">Tweets & replies</p>
        </div>

        <div id="box-nav" className="box-Media">
          <p id="nav">Media</p>
        </div>

        <div id="box-nav" className="box-Likes">
          <p id="nav">Likes</p>
        </div>
      </div>

      <div id="line"></div>

      <Tweet
        tweet="😎 JavaScript is an easy language to get started with, a hard language to master"
        likeNumber="25"
        comment="1"
      />
      <Tweet
        tweet="When a coding problem is pause your music worthy"
        likeNumber="96"
        comment="5"
      />
      <Tweet
        tweet="Building projects makes u good programmer"
        likeNumber="60"
      />
      <Tweet
        tweet="The hardest part of coding is not the coding. It's deciding what to build"
        likeNumber="60"
      />
      <Tweet tweet="Every line of code comes with the responsibility to maintain it" likeNumber="60" />
      
    </div>
  );
};

export default Main;