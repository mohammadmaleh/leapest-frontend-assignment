import HeaderContent from "./components/Header/Header";
import { changeLanguage } from "./redux/actions/language";
import instructorsSelector from "./redux/selctors/instructorsSelector";

import {
  updateSortType,
  updateFilterText
} from "./redux/actions/instructorsFilter";
import { fetchInstructors, likeInstructor } from "./redux/actions/instructors";
import "./App.scss";
import debounce from "lodash.debounce";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import SearchBar from "./components/SearchBar/SearchBar";
import InstructorsList from "./components/InstructorsList/InstructorsList";
import SendOfferModal from "./components/SendOfferModal/SendOfferModal";
const { Header, Content, Sider } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validSearchInput: true,
      showSendOfferModal: false,
      selectedInstructor: {}
    };
  }
  toggleSendOfferModal = (id = null) => {
    let { filteredInstructors } = this.props;
    console.log(id);
    console.log(filteredInstructors);

    this.setState(prevState => {
      return {
        showSendOfferModal: !prevState.showSendOfferModal,
        selectedInstructor: id
          ? filteredInstructors.find(instructor => instructor.id === id)
          : {}
      };
    });
  };
  handleChangeLanguage = languageCode => {
    let { changeLanguage } = this.props;
    changeLanguage(languageCode);
  };
  handleChangeFilter = e => {
    let { updateFilterText } = this.props;
    let filterCriteria = e.target.value;
    debounce(() => {
      updateFilterText(filterCriteria);
    }, 200)();
  };
  componentDidMount() {
    let { fetchInstructors } = this.props;
    fetchInstructors();
  }
  handleSortClick = sortItem => {
    let { updateSortType } = this.props;
    updateSortType(sortItem);
  };
  handleLikeInstructor = id => {
    let { likeInstructor } = this.props;
    likeInstructor(id);
  };
  handleSendOffer = id => {
    this.setState(prevState => {
      return {
        showSendOfferModal: !prevState.showSendOfferModal
      };
    });
  };
  handleClickInstructor = id => {
    this.props.history.push(`/details/${id}`);
  };
  render() {
    let { language, filteredInstructors, activeSort } = this.props;
    let {
      validSearchInput,
      showSendOfferModal,
      selectedInstructor
    } = this.state;
    return (
      <div id="App">
        <Layout hasSider style={{ width: "100vw" }}>
          <Layout>
            <Header>
              <HeaderContent
                language={language}
                handleChangeLanguage={this.handleChangeLanguage}
              />
            </Header>
            <Content className="main-content">
              <SearchBar
                handleSortClick={this.handleSortClick}
                handleChangeFilter={this.handleChangeFilter}
                validSearchInput={validSearchInput}
                activeSort={activeSort}
                language={language}
              />
              <InstructorsList
                instructors={filteredInstructors}
                handleLikeInstructor={this.handleLikeInstructor}
                language={language}
                handleSendOffer={this.handleSendOffer}
                handleClickInstructor={this.handleClickInstructor}
                toggleSendOfferModal={this.toggleSendOfferModal}
              />
            </Content>
          </Layout>
        </Layout>
        <SendOfferModal
          language={language}
          showSendOfferModal={showSendOfferModal}
          instructor={selectedInstructor}
          toggleSendOfferModal={this.toggleSendOfferModal}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  let { language, instructorsFilter } = state;
  return {
    language: language.language,
    filteredInstructors: instructorsSelector(state),
    activeSort: instructorsFilter.activeSort
  };
}

export default connect(
  mapStateToProps,
  {
    changeLanguage,
    fetchInstructors,
    updateSortType,
    updateFilterText,
    likeInstructor
  }
)(App);
