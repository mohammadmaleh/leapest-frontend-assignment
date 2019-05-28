import React, { Component } from "react";
import { connect } from "react-redux";
import "./Details.scss";
import { fetchInstructor } from "../../redux/actions/instructors";
import Icon from "antd/es/icon";
import SendOfferModal from "../../components/SendOfferModal/SendOfferModal";
import InstructorBasicInfo from "../../components/InstructorBasicInfo/InstructorBasicInfo";
import InstructorStats from "../../components/InstructorStats/InstructorStats";
import { Link } from "react-router-dom";
import { Button } from "antd";
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSendOfferModal: false
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    let { fetchInstructor } = this.props;
    fetchInstructor(id);
  }

  toggleSendOfferModal = () => {
    this.setState(prevState => {
      return {
        showSendOfferModal: !prevState.showSendOfferModal
      };
    });
  };
  render() {
    const { selectedInstructor, language } = this.props;
    const { showSendOfferModal } = this.state;
    const {
      personalImage,
      profession,
      instructorName,
      numberOfReviews,
      rating,
      deliveries,
      startRate,
      id
    } = selectedInstructor;
    if (!selectedInstructor.id)
      return (
        <div className="details">
          <Icon type="loading" />
        </div>
      );
    return (
      <div className="details">
        <Link to={"/"} className="back-button-container">
          <p>{`<  Back`}</p>
        </Link>
        <div className="instructor-details-item">
          <InstructorBasicInfo
            personalImage={personalImage}
            profession={profession}
            instructorName={instructorName}
          />
          <InstructorStats
            startRate={startRate}
            deliveries={deliveries}
            rating={rating}
            numberOfReviews={numberOfReviews}
            language={language}
          />
          <div className="instructor-footer">
            <Button
              type="primary"
              className="send-offer"
              onClick={() => this.toggleSendOfferModal(id)}
            >
              {language.sendOffer}
            </Button>
          </div>
        </div>

        <SendOfferModal
          toggleSendOfferModal={this.toggleSendOfferModal}
          instructor={selectedInstructor}
          language={language}
          showSendOfferModal={showSendOfferModal}
        />
      </div>
    );
  }
}
function mapStateToProps({ instructors, language }) {
  console.log(instructors);
  return {
    language: language.language,

    selectedInstructor: instructors.selectedInstructor
  };
}

export default connect(
  mapStateToProps,
  { fetchInstructor }
)(Details);
