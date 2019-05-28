import React from "react";
import "./InstructorsItem.scss";
import PropTypes from "prop-types";
import { Icon, Button } from "antd";
import InstructorStats from "../InstructorStats/InstructorStats";
const InstructorsItem = ({
  instructor,
  likeInstructor,
  language,
  sendOffer,
  handleClickInstructor,
  toggleSendOfferModal
}) => {
  let {
    instructorName,
    startRate,
    rating,
    companyName,
    numberOfReviews,
    deliveries,
    country,
    languages,
    skills,
    liked,
    featured,
    personalImage,
    id
  } = instructor;
  const renderLanguages = () =>
    languages.map((language, index) =>
      index !== languages.length - 1 ? `${language}, ` : `${language}`
    );
  const renderSkills = () =>
    skills.map((skill, index) => (
      <div key={index} className="skill">
        {skill}
      </div>
    ));
  return (
    <div className="instructors-item">
      <div
        className="instructor-header"
        onClick={() => handleClickInstructor(id)}
      >
        <div className="personal-image-container">
          {featured ? (
            <div className="featured">
              <span>{featured}</span>
            </div>
          ) : null}

          <img
            src={personalImage}
            alt="personal image"
            className="personal-image"
          />
        </div>
        <div className="instructor-info">
          <p className="instructor-name">{instructorName}</p>
          <div className="company-name-container">
            <div className="circle" />
            <p className="company-name">{companyName}</p>
          </div>

          <InstructorStats
            numberOfReviews={numberOfReviews}
            language={language}
            rating={rating}
            deliveries={deliveries}
            startRate={startRate}
          />
        </div>
        <div className="like-holder">
          <Icon
            type="star"
            theme={liked ? "filled" : "outlined"}
            style={{ color: liked ? "#fac528" : "#8e8fa6", fontSize: 23 }}
            onClick={e => {
              e.stopPropagation();
              likeInstructor(id);
            }}
          />
        </div>
      </div>
      <div className="instructors-body">
        <div className="country-holder">
          <Icon type="global" />
          <p className="country">{country}</p>
        </div>
        <div className="country-holder">
          <Icon type="sound" />
          <p className="country">{renderLanguages()}</p>
        </div>
        <div className="skills-holder">{renderSkills()}</div>
      </div>
      <div className="instructor-footer">
        <Button
          type="primary"
          className="send-offer"
          onClick={() => sendOffer(id)}
        >
          {language.sendOffer}
        </Button>
      </div>
    </div>
  );
};
InstructorsItem.propTypes = {
  instructor: PropTypes.object.isRequired,

  likeInstructor: PropTypes.func,
  sendOffer: PropTypes.func.isRequired,
  handleClickInstructor: PropTypes.func,
  language: PropTypes.object.isRequired
};
export default InstructorsItem;
