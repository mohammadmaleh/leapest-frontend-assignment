import React from "react";
import "./SearchBar.scss";
import InstructorSortItem from "../InstructorSortItem/InstructorSortItem";
import PropTypes from "prop-types";
import { Input, Row, Col } from "antd";
const SearchBar = ({
  handleChangeFilter,
  handleSortClick,
  activeSort,
  language
}) => {
  let renderSortItems = () => {
    let filters = [
      {
        sortText: language.aToz,
        sortType: "alphabetical"
      },
      {
        sortText: language.startRate,
        sortType: "startRate"
      },
      {
        sortText: language.rate,
        sortType: "rate"
      }
    ];
    return filters.map((filter, index) => {
      return (
        <InstructorSortItem
          key={index}
          active={filter.sortType === activeSort.type}
          ascending={
            filter.sortType === activeSort.type ? activeSort.ascending : false
          }
          handleClickSortItem={handleSortClick}
          sortText={filter.sortText}
          sortType={filter.sortType}
        />
      );
    });
  };
  return (
    <div className="search-bar">
      <Row gutter={10}>
        <Col span={12}>
          <div className="filters-container">{renderSortItems()}</div>
        </Col>
        <Col span={12}>
          <Input
            placeholder="input with clear icon"
            allowClear
            className="search-input"
            onChange={e => handleChangeFilter(e)}
          />
        </Col>
      </Row>
    </div>
  );
};
SearchBar.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
  handleSortClick: PropTypes.func.isRequired,
  validSearchInput: PropTypes.bool.isRequired,
  language: PropTypes.object.isRequired,
  activeSort: PropTypes.object.isRequired
};
export default SearchBar;
