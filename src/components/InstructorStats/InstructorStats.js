import "./InstructorStats.scss";
import React from "react";
import { Icon } from "antd";
import PropTypes from "prop-types";
const InstructorStats = ({
  numberOfReviews,
  language,
  rating,
  deliveries,
  startRate
}) => {
  return (
    <div className="instructor-stats">
      <div className="rating-container">
        <div className="rating">
          <Icon type="star" theme="filled" style={{ color: "#fac528" }} />
          <p className="rating-number">{`${rating}/10`}</p>
        </div>
        <p className="rating-description">{`${
          language.rating
        } (${numberOfReviews} ${language.reviews})`}</p>
      </div>
      <div className="stat-container">
        <p className="stat">{deliveries}</p>
        <p className="stat-description">{language.deliveries}</p>
      </div>
      <div className="stat-container">
        <p className="stat">{startRate}</p>
        <p className="stat-description">{language.startRate}</p>
      </div>
    </div>
  );
};
InstructorStats.propTypes = {
  numberOfReviews: PropTypes.number.isRequired,
  language: PropTypes.object.isRequired,
  rating: PropTypes.number.isRequired,
  deliveries: PropTypes.number.isRequired,
  startRate: PropTypes.number.isRequired
};
export default InstructorStats;
