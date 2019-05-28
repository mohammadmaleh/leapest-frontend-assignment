import React from "react";
import { Dropdown, Menu, Button } from "antd";
import PropTypes from "prop-types";
import "./Header.scss";
import languages from "../../constatns/language";
const Header = ({ handleChangeLanguage, language }) => {
  let renderMenuItems = () => {
    return (
      <Menu data-test="header-content">
        {languages.map((language, index) => (
          <Menu.Item
            key={index}
            onClick={() => handleChangeLanguage(language.languageCode)}
          >
            <span className="language-code" data-test="language-code">
              {language.languageCode}
            </span>
          </Menu.Item>
        ))}
      </Menu>
    );
  };

  return (
    <div className="header">
      <Dropdown overlay={renderMenuItems()} placement="bottomLeft">
        <Button
          className="change-language-button"
          data-test="change-language-button"
        >
          <span className="language-code"> {language.languageCode}</span>
        </Button>
      </Dropdown>
    </div>
  );
};
Header.propTypes = {
  handleChangeLanguage: PropTypes.func.isRequired,
  language: PropTypes.object.isRequired
};
export default Header;
