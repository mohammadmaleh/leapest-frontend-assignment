import React from "react";
import ProTypes from "prop-types";
import "./InstructorSortItem.scss";
import classNames from "classnames";
import { Icon } from "antd";
const InstructorSortItem = ({
  sortText,
  ascending,
  sortType,
  active,
  handleClickSortItem
}) => {
  const sortTextClass = classNames("sort-text", { active });

  return (
    <div
      className="instructor-sort-item"
      onClick={() => {
        handleClickSortItem({ type: sortType, ascending: !ascending });
      }}
    >
      <p className={sortTextClass}>{sortText}</p>
      <div className="sort-icons-container">
        <Icon
          type="caret-up"
          style={{ color: active && ascending ? "#00a6d9" : null }}
        />
        <Icon
          type="caret-down"
          style={{ color: active && !ascending ? "#00a6d9" : null }}
        />
      </div>
    </div>
  );
};
InstructorSortItem.propTypes = {
  sortText: ProTypes.string.isRequired,
  ascending: ProTypes.bool.isRequired,
  sortType: ProTypes.string.isRequired,
  active: ProTypes.bool.isRequired,
  handleClickSortItem: ProTypes.func.isRequired
};
export default InstructorSortItem;
