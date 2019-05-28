import React from "react";
import "./InstructorsList.scss";
import PropTypes from "prop-types";
import InstructorsItem from "../InstructorsItem/InstructorsItem";
const InstructorsList = ({
  instructors,
  handleLikeInstructor,
  language,
  handleClickInstructor,
  toggleSendOfferModal
}) => {
  let renderInstructors = () =>
    instructors.map((instructor, index) => (
      <InstructorsItem
        key={index}
        instructor={instructor}
        likeInstructor={handleLikeInstructor}
        language={language}
        sendOffer={toggleSendOfferModal}
        handleClickInstructor={handleClickInstructor}
        details={false}
      />
    ));

  return <div className="instructors-list">{renderInstructors()}</div>;
};
InstructorsList.propTypes = {
  instructors: PropTypes.array.isRequired,
  handleLikeInstructor: PropTypes.func.isRequired,
  language: PropTypes.object.isRequired,
  toggleSendOfferModal: PropTypes.func.isRequired
};
export default InstructorsList;
