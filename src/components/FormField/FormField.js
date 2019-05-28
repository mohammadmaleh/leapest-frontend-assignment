import React from "react";
import "./FormField.scss";
import PropTypes from "prop-types";
import { Form } from "antd";

const FormField = ({
  name,
  labelText,
  descriptionText,
  children,
  error,
  getFieldDecorator,
  options
}) => {
  if (!options) return null;
  return (
    <div className="form-item-container">
      <label htmlFor={name}>{labelText}</label>
      {descriptionText ? (
        <p className="form-description">{descriptionText}</p>
      ) : null}

      <Form.Item validateStatus={error ? "error" : ""}>
        {getFieldDecorator(name, options)(children)}
      </Form.Item>
    </div>
  );
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  descriptionText: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  getFieldDecorator: PropTypes.any.isRequired,
  error: PropTypes.any.isRequired,
  options: PropTypes.any.isRequired
};
export default FormField;
