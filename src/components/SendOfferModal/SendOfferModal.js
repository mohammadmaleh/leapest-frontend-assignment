import React from "react";
import "./SendOfferModal.scss";
import { Modal, Icon } from "antd";
import PropTypes from "prop-types";
import SubmitOfferForm from "../SubmitOfferForm/SubmitOfferForm";
import InstructorBasicInfo from "../InstructorBasicInfo/InstructorBasicInfo";
const SendOfferModal = ({
  toggleSendOfferModal,
  showSendOfferModal,
  language,
  instructor
}) => {
  console.log(instructor);
  if (!instructor || !instructor.instructorName) return <Icon type="loading" />;

  const { instructorName, personalImage, profession } = instructor;
  return (
    <Modal
      visible={showSendOfferModal}
      destroyOnClose
      footer={false}
      onCancel={toggleSendOfferModal}
      width={660}
      title={language.newOffer}
    >
      <InstructorBasicInfo
        instructorName={instructorName}
        personalImage={personalImage}
        profession={profession}
      />
      <SubmitOfferForm
        instructor={instructor}
        language={language}
        toggleSendOfferModal={toggleSendOfferModal}
      />
    </Modal>
  );
};
SendOfferModal.propTypes = {
  showSendOfferModal: PropTypes.bool.isRequired,
  toggleSendOfferModal: PropTypes.func.isRequired,
  instructor: PropTypes.object.isRequired,
  language: PropTypes.object.isRequired
};
export default SendOfferModal;
