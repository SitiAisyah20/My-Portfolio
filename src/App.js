import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Display from "./components/Display";
import Slidebar from "./components/SlideBar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Slidebar />
          <Display />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
