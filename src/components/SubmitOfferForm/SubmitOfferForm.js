import React, { Component } from "react";
import "./SubmitOfferForm.scss";
import {
  Form,
  Icon,
  Input,
  Button,
  InputNumber,
  Row,
  Col,
  message,
  Select
} from "antd";
import FormField from "../FormField/FormField";
import PropTypes from "prop-types";
import { postOffer } from "../../API";
const options = {
  startRate: {
    rules: [
      {
        required: true,
        type: "number"
      }
    ],
    initialValue: ""
  },
  travelAndExpenses: {
    rules: [
      {
        required: true,
        type: "number"
      }
    ],
    initialValue: 0
  },
  contactEmail: {
    rules: [
      {
        required: true,
        type: "email"
      }
    ],
    trigger: "onChange",
    validateFirst: false,
    validateTrigger: "onBlur"
  },
  selectLanguage: {
    rules: [
      {
        required: true
      }
    ]
  },
  additionalComments: {
    rules: [
      {
        max: 120
      }
    ]
  }
};

class SubmitOfferForm extends Component {
  componentDidMount() {
    this.props.form.validateFields();
  }
  hasErrors = fieldsError =>
    Object.keys(fieldsError).some(field => fieldsError[field]);

  handleSubmit = e => {
    e.preventDefault();
    let { toggleSendOfferModal, form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        postOffer
          .then(() => {
            message.success(this.props.language.successOffer);
            toggleSendOfferModal();
          })
          .catch(() => {
            message.error("ops!!, something went wrong, try again later :)");
          });
      }
    });
  };
  render() {
    const { instructor, form, language, toggleSendOfferModal } = this.props;
    if (!instructor.id) return <Icon type="loading" />;

    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = form;
    const { startRate, languages } = instructor;
    options.startRate.initialValue = startRate;
    // Only show error after a field is touched.
    const startRateError =
      isFieldTouched("startRate") && getFieldError("startRate");

    const travelAndExpensesError =
      isFieldTouched("travelAndExpenses") && getFieldError("travelAndExpenses");

    const contactEmailError =
      isFieldTouched("contactEmail") && getFieldError("contactEmail");

    const additionalCommentsError =
      isFieldTouched("additionalComments") &&
      getFieldError("additionalComments");

    const selectLanguageError =
      isFieldTouched("selectLanguage") && getFieldError("selectLanguage");

    return (
      <Form
        layout="inline"
        onSubmit={this.handleSubmit}
        className="submit-offer-form"
      >
        <Row gutter={10} justify="space-between">
          <Col span={12}>
            <FormField
              labelText={language.startRate}
              name="startRate"
              descriptionText={language.proposeNewDailyRate}
              error={startRateError}
              getFieldDecorator={getFieldDecorator}
              options={options.startRate}
            >
              <InputNumber
                autoFocus
                size="large"
                min={0}
                className="number-input"
                formatter={value =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
              />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField
              labelText={language.travelAndExpenses}
              name="travelAndExpenses"
              descriptionText={language.proposeNewTE}
              error={travelAndExpensesError}
              options={options.travelAndExpenses}
              getFieldDecorator={getFieldDecorator}
            >
              <InputNumber
                min={0}
                size="large"
                className="number-input"
                formatter={value =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
              />
            </FormField>
          </Col>
        </Row>
        <Row gutter={10} justify="space-between">
          <Col span={24}>
            <FormField
              labelText={language.contactEmail}
              name="contactEmail"
              descriptionText={language.lorem}
              error={contactEmailError}
              getFieldDecorator={getFieldDecorator}
              options={options.contactEmail}
            >
              <Input className="email-input" />
            </FormField>
          </Col>
        </Row>
        <Row gutter={10} justify="space-between">
          <Col span={24}>
            <FormField
              labelText={language.selectLanguage}
              name="selectLanguage"
              descriptionText={language.lorem}
              error={selectLanguageError}
              getFieldDecorator={getFieldDecorator}
              options={options.selectLanguage}
            >
              <Select className="email-input">
                {languages.map((language, index) => (
                  <Select.Option key={index} value={language}>
                    {language.charAt(0).toUpperCase() + language.slice(1)}
                  </Select.Option>
                ))}
              </Select>
            </FormField>
          </Col>
        </Row>
        <Row gutter={10} justify="space-between">
          <Col span={24}>
            <FormField
              labelText={language.additionalComments}
              name="additionalComments"
              error={additionalCommentsError}
              getFieldDecorator={getFieldDecorator}
              options={options.additionalComments}
            >
              <Input.TextArea rows={4} size="large" autosize={false} />
            </FormField>
          </Col>
        </Row>
        <div className="submit-control-container">
          <Button type="default" onClick={toggleSendOfferModal}>
            {language.cancel}
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            disabled={this.hasErrors(getFieldsError())}
          >
            {language.sendOffer}
          </Button>
        </div>
      </Form>
    );
  }
}
SubmitOfferForm.propTypes = {
  instructor: PropTypes.object.isRequired,
  language: PropTypes.object.isRequired,
  toggleSendOfferModal: PropTypes.func.isRequired
};
export default Form.create({ name: "send-offer-form" })(SubmitOfferForm);
