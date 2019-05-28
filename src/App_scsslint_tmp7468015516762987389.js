import React, { Component } from "react";

import "./App.scss";
import { Layout } from "antd";
import HeaderContent from "./components/Header/Header";
const { Header, Footer, Sider, Content } = Layout;
import { connect } from "react-redux";

import { changeLanguage } from "./redux/actions";

class App extends Component {
  handleChangeLanguage = e => {
    let { changeLanguage } = this.props;
    changeLanguage(e ? "en" : "tr");
  };

  render() {
    let { language } = this.props;
    return (
      <div className="App">
        <Layout style={{ height: "100%" }}>
          <Layout>
            <Header>
              <HeaderContent handleChangeLanguage={this.handleChangeLanguage} />
            </Header>
            <Content>{language}</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
function mapStateToProps({ language }) {
  return {
    language: language.language
  };
}

export default connect(
  mapStateToProps,
  { changeLanguage }
)(App);
