import "./InstructorBasicInfo.scss";
import React from "react";
import { Icon } from "antd";
import PropTypes from "prop-types";
const InstructorBasicInfo = ({ personalImage, profession, instructorName }) => {
  return (
    <div className="instructor-basic-info">
      <div className="personal-image-container">
        <div className="liked">
          <Icon
            type="star"
            theme="filled"
            style={{ color: "#00a6d9", fontSize: 23 }}
          />
        </div>
        <img
          src={personalImage}
          className="personal-image"
          alt="personal-image"
        />
      </div>
      <div className="instructor-info">
        <p className="instructor-name">{instructorName}</p>
        <div className="instructor-profession">
          <p>{profession}</p>
        </div>
      </div>
    </div>
  );
};
InstructorBasicInfo.propTypes = {
  instructorName: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  personalImage: PropTypes.string.isRequired
};
export default InstructorBasicInfo;
